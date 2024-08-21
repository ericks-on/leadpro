import { Kitchen } from "@/app/lib/definitions";
import DeleteButton from "../deleteButton";
import { Suspense, useState } from "react";
import { ProductsTableSkeleton } from "@/app/skeletons";
import { deleteKitchen } from "@/app/lib/actions";

export default function KitchenTable({ items }: { items: Kitchen[] }) {
    return (
        <Suspense fallback={<ProductsTableSkeleton />}>
            <main className="container mx-auto">
                <h1 className="text-2xl font-semibold text-center w-full text-gray-800">Kitchen</h1>
                <table className="w-full mt-6 border-t">
                    <thead className="border-b-2 border-gray-400">
                        <tr>
                            <th className="px-4 py-3 text-left text-gray-500">Raw product consumed</th>
                            <th className="px-4 py-3 text-left text-gray-500">Type of Produce</th>
                            <th className="px-4 py-3 text-left text-gray-500">Quality of produce</th>
                            <th className="px-4 py-3 text-left text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="px-4 py-3 text-sm text-gray-500">{item.rawproduct}gh</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">{item.type}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">{item.quantity}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        <DeleteButton id={item.id} deleteFunction={deleteKitchen}/>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>    
                </table>
            </main> 
        </Suspense>
    );
}