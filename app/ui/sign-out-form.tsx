import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { NextResponse } from 'next/server';
import { Sign } from 'crypto';
import SignOutButton from '@/app/ui/sign-out-button';

export default function SignOutForm() {
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
            <SignOutButton />
        </form>
    )
}