'use client'
import { PowerIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import clsx from "clsx";

export default function SignOutButton() {
    const [clicked, setClicked] = useState(false);
    return (
        <button
            onClick={() => setClicked(true)}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-grey-700 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>            
        </button>
    )
}
