'use client'

import { addProduct } from "@/app/lib/actions";
import { useActionState } from "react";

export default function ProductsForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        addProduct,
        undefined,
    );

    
    return (
        <main className="container mx-auto">
            <h1 className="text-2xl text-center font-semibold text-gray-800 ">Add Product</h1>
            <form className="mt-6" action={formAction}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-20 md:w-3/4 md:mx-auto">
                    <div>
                        <label className="text-gray-700" htmlFor="name">Name</label>
                        <input className="w-full px-4 py-2 mt-2 border rounded-lg" type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label className="text-gray-700" htmlFor="quantity">Quantity</label>
                        <input className="w-full px-4 py-2 mt-2 border rounded-lg" type="number" id="quantity" name="quantity" />
                    </div>
                    <div>
                        <label className="text-gray-700" htmlFor="price">Price</label>
                        <input className="w-full px-4 py-2 mt-2 border rounded-lg" type="number" id="price" name="price" />
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <button className=" px-2 py-2 mt-2 md:m-0 text-white bg-blue-500 rounded-lg"
                            aria-disabled={isPending}>Add Product
                        </button>
                    </div>
                </div>
                {errorMessage && (
                    <p className="text-sm text-center text-[20px] text-red-500">{errorMessage}</p>
                )}
            </form>
        </main>
    );
}