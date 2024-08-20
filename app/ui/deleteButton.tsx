'use client'
import { deleteProduct } from "../lib/actions";

export default function DeleteButton({ index }: { index: number }) {
    return (
        <button className="text-sm p-2 text-white bg-red-500 rounded-lg"
            onClick={() => deleteProduct(index)}>Delete</button>
    )
}