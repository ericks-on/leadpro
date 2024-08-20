'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';


export async function getProducts() {
    let data = await fs.readFile('app/lib/products.json', 'utf-8');
    return JSON.parse(data);
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
            name,
            quantity: parseInt(quantity),
            price: parseInt(price),
        };

        // Read the current data from the JSON file
        const data = await fs.readFile('app/lib/products.json', 'utf-8');
        const products = JSON.parse(data);

        // Add the new product to the array
        products.push(product);

        // Write the updated data back to the JSON file
        const newData = JSON.stringify(products, null, 2); // `null, 2` for pretty-printing
        await fs.writeFile('app/lib/products.json', newData);

        // Revalidate the path and redirect
        // revalidatePath('/products');
        // redirect('/products');
    
}

export async function deleteProduct(index: number) {
    let data = await fs.readFile('app/lib/products.json', 'utf-8');
    let products = JSON.parse(data);
    products.splice(index, 1);
    let newData = JSON.stringify(products);
    await fs.writeFile('app/lib/products.json', newData);

    revalidatePath('/products')
    redirect('/products')
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