import { product } from "@/app/lib/definitions";
import DeleteButton from "../deleteButton";
import { useState } from "react";

export default function ProductsTable({ products }: { products: product[] }) {
    return (
        <main className="container mx-auto">
            <h1 className="text-2xl font-semibold text-center w-full text-gray-800">Products</h1>
            <table className="w-full mt-6 border-t">
                <thead className="border-b-2 border-gray-400">
                    <tr>
                        <th className="px-4 py-3 text-left text-gray-500">Name</th>
                        <th className="px-4 py-3 text-left text-gray-500">Quantity</th>
                        <th className="px-4 py-3 text-left text-gray-500">Price</th>
                        <th className="px-4 py-3 text-left text-gray-500">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td className="px-4 py-3 text-sm text-gray-500">{product.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-500">{product.quantity}</td>
                                <td className="px-4 py-3 text-sm text-gray-500">${product.price}</td>
                                <td className="px-4 py-3 text-sm text-gray-500">
                                    <DeleteButton index={index}/>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>    
            </table>
        </main> 
    );
}