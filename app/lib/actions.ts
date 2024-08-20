'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from "@vercel/postgres"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "./definitions";

export async function getProducts() {
    let data = await sql<Product>`SELECT * FROM products`;
    return data.rows as Product[];
}

export async function addProduct(
    prevState: string | undefined,
    formdata: FormData
) {
        const name = formdata.get('name') as string;
        const quantity = formdata.get('quantity') as string;
        const price = formdata.get('price') as string;

        // Validate data
        if (!name || !quantity || !price || isNaN(parseInt(quantity)) || isNaN(parseInt(price))) {
            return 'Invalid input data';
        }

        const product = {
            id: uuidv4(),
            name,
            quantity: parseInt(quantity),
            price: parseInt(price),
        };

        // Insert the new product into the database
        await sql`
            INSERT INTO products (id, name, quantity, price)
            VALUES (${product.id}, ${product.name}, ${product.quantity}, ${product.price})
        `;

        // Revalidate the path and redirect
        revalidatePath('/products');
        redirect('/products');
    
}

export async function deleteProduct(id: string) {
    // Delete the product from the database
    await sql`
        DELETE FROM products
        WHERE id = ${id}
    `;

    revalidatePath('/products');
    redirect('/products');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    const credentials = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
    };
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}