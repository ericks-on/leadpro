'use client'
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import {
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <form action={formAction} className="flex flex-col gap-4 text-2xl">
            <div className="flex gap-2">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="flex gap-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="flex justify-center">
                {isPending ? (
                    <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    </svg>
                    ): (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" aria-disabled={isPending}>Login</button>
                    )
                }
            </div>
            {errorMessage && (
                <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
        </form>
    )
}