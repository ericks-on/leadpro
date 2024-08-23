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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" aria-disabled={isPending}>
                    {isPending ? (
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                        'Login'
                    )}
                    
                </button>
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
<p className="text-sm text-center">
                Don't have an account?{' '}
                <button type="button" className="text-blue-500" onClick={switchToSignUp}>
                    Sign Up
                </button>
            </p>
        </form>
    );
}

function SignUpForm({ switchToLogin }) {
    const [errorMessage, formAction, isPending] = useActionState(
        signUp,
        undefined,
    );

    return (
        <form action={formAction} className="flex flex-col gap-4 text-2xl">
            <div className="flex gap-2">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="flex gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="flex gap-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="flex gap-2">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" />
            </div>
            <div className="flex justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" aria-disabled={isPending}>
                    {isPending ? (
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </div>
            {errorMessage && (
                <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
            <p className="text-sm text-center">
                Already have an account?{' '}
                <button type="button" className="text-blue-500" onClick={switchToLogin}>
                    Log In
                </button>
            </p>
        </form>
    );
}

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {isLogin ? (
                <LoginForm switchToSignUp={() => setIsLogin(false)} />
            ) : (
                <SignUpForm switchToLogin={() => setIsLogin(true)} />
            )}
        </div>
    );
}
