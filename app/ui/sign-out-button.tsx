import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { NextResponse } from 'next/server';
import { useState } from 'react';

export default function SignOutButton() {
    const [clicked, setClicked] = useState(false);
    return (
        <form
            className="absolute top-0 right-0"
            action={async () => {
                'use server';
                await signOut({
                    redirect: true,
                    redirectTo: '/',
                });
            }}
        >
            {clicked ? (
                <svg
                    className="animate-spin h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                </svg>
            ) : (
                <button
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-grey-700 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    onClick={() => setClicked(true)}
                >
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
            )}
            {/* <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-grey-700 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" >
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
            </button> */}
        </form>
    )
}