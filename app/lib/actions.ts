'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from "@vercel/postgres"
import { v4 as uuidv4 } from 'uuid';
import { Kitchen, Product, Sale, Supply } from "./definitions";

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
        revalidatePath('/inventory/products');
        redirect('/inventory/products');
    
}

export async function deleteProduct(id: string) {
    // Delete the product from the database
    await sql`
        DELETE FROM products
        WHERE id = ${id}
    `;

    revalidatePath('/inventory/products');
    redirect('/inventory/products');
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

// deleting kitchen
export async function deleteKitchen(id: string) {
    // Delete the product from the database
    await sql`
        DELETE FROM kitchen
        WHERE id = ${id}
    `;

    revalidatePath('/inventory/kitchen');
    redirect('/inventory/kitchen');
}

export async function getKitchen() {
    let data = await sql<Kitchen>`SELECT * FROM kitchen`;
    return data.rows as Kitchen[];
}

export async function addKitchen(
    prevState: string | undefined,
    formdata: FormData
) {
        const rawproduct = formdata.get('raw') as string;
        const type = formdata.get('type') as string;
        const quantity = formdata.get('quantity') as string;

        // Validate data
        if (!rawproduct || !type || !quantity || isNaN(parseInt(quantity))) {
            return 'Invalid input data';
        }

        const kitchen = {
            id: uuidv4(),
            rawproduct,
            type,
            quantity: parseInt(quantity),
        };

        // Insert the new product into the database
        await sql`
            INSERT INTO kitchen (id, rawProduct, type, quantity)
            VALUES (${kitchen.id}, ${kitchen.rawproduct}, ${kitchen.type}, ${kitchen.quantity})
        `;

        // Revalidate the path and redirect
        revalidatePath('/inventory/kitchen');
        redirect('/inventory/kitchen');
    
}

//sales
export async function getSales() {
    let data = await sql<Sale>`SELECT * FROM sales`;
    return data.rows as Sale[];
}

export async function addSale(
    prevState: string | undefined,
    formdata: FormData
) {
        const type = formdata.get('type') as string;
        const quantity = formdata.get('quantity') as string;

        // Validate data
        if (!type || !quantity || isNaN(parseInt(quantity))) {
            return 'Invalid input data';
        }

        const sale = {
            id: uuidv4(),
            type,
            quantity: parseInt(quantity),
        };

        // Insert the new product into the database
        await sql`
            INSERT INTO sales (id, type, quantity)
            VALUES (${sale.id}, ${sale.type}, ${sale.quantity})
        `;

        // Revalidate the path and redirect
        revalidatePath('/inventory/sales');
        redirect('/inventory/sales');
    
}

export async function deleteSale(id: string) {
    // Delete the product from the database
    await sql`
        DELETE FROM sales
        WHERE id = ${id}
    `;

    revalidatePath('/inventory/sales');
    redirect('/inventory/sales');
}

// supplies
export async function getSupplies() {
    let data = await sql<Supply>`SELECT * FROM supplies`;
    return data.rows as Supply[];
}

export async function addSupply(
    prevState: string | undefined,
    formdata: FormData
) {
        const product = formdata.get('product') as string;
        const quantity = formdata.get('quantity') as string;
        const price = formdata.get('price') as string;

        // Validate data
        if (!product || !quantity || !price || isNaN(parseInt(quantity)) || isNaN(parseInt(price))) {
            return 'Invalid input data';
        }

        const supply = {
            id: uuidv4(),
            product,
            quantity: parseInt(quantity),
            price: parseInt(price),
        };

        // Insert the new product into the database
        await sql`
            INSERT INTO supplies (id, product, quantity, price)
            VALUES (${supply.id}, ${supply.product}, ${supply.quantity}, ${supply.price})
        `;

        // Revalidate the path and redirect
        revalidatePath('/inventory/supplies');
        redirect('/inventory/supplies');
    
}

export async function deleteSupply(id: string) {
    // Delete the product from the database
    await sql`
        DELETE FROM supplies
        WHERE id = ${id}
    `;

    revalidatePath('/inventory/supplies');
    redirect('/inventory/supplies');
}