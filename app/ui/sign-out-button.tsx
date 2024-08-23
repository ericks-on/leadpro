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
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-grey-700 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" >
                {clicked ? (
                    <div className='flex items-center gap-2'>
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </div>
                ) : (
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                )}
            </button>
        </form>
    )
}