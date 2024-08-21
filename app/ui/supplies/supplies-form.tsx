'use client'

import { addSupply } from "@/app/lib/actions";
import { useActionState } from "react";
import clsx from 'clsx';

export default function SuppliesForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        addSupply,
        undefined,
    );

    
    return (
        <main className="container mx-auto">
            <h1 className="text-2xl text-center font-semibold text-grey-800 ">Add Supply</h1>
            <form className="mt-6" action={formAction}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-20 md:w-3/4 md:mx-auto">
                    <div>
                        <label className="text-gray-700" htmlFor="raw">Product</label>
                        <input className="w-full px-4 py-2 mt-2 border text-grey-800  rounded-lg" type="text" id="product" name="product" />
                    </div>
                    <div>
                        <label className="text-gray-700" htmlFor="type">Quantity</label>
                        <input className="w-full px-4 py-2 mt-2 border text-grey-800 rounded-lg" type="number" id="quantity" name="quantity" />
                    </div>
                    <div>
                        <label className="text-gray-700" htmlFor="quantity">Price</label>
                        <input className="w-full px-4 py-2 mt-2 border text-grey-800 rounded-lg" type="number" id="price" name="price" />
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <button className={clsx(
                            " px-2 py-2 mt-2 md:m-0 text-white bg-blue-500 rounded-lg",
                            isPending && 'opacity-50 cursor-not-allowed'
                        )}
                            aria-disabled={isPending}>
                            {isPending ? (
                            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                            ) : (
                            'Add supply'
                            )}
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