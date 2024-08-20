import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    providers: [],

    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl, method} }) {
            const isLoggedIn = !!auth?.user;
            const isOnProducts = nextUrl.pathname.startsWith('/products');
            const isOnWelcome = nextUrl.pathname.startsWith('/welcome');
            if (isOnProducts) {
                if (isLoggedIn) return true;
                return Response.redirect(new URL('/', nextUrl)); // Redirect unauthenticated users to login page
            // }
            } else if (isLoggedIn && !isOnWelcome) {
                return Response.redirect(new URL('/welcome', nextUrl));
            } 
            return true;
        },
        // async redirect({ url, baseUrl }) {
        //     return new URL(url, baseUrl).toString();
        // },
    },
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig;