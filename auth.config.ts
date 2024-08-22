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
            const isOnKitchen = nextUrl.pathname.startsWith('/kitchen');
            const isOnSales = nextUrl.pathname.startsWith('/sales');
            const isOnSupply = nextUrl.pathname.startsWith('/supplies');
            const isOnInventory = nextUrl.pathname.startsWith('/inventory');


            // Check if the request is for a static asset (e.g., images, CSS, JS)
            const isAssetRequest = /\.(jpg|jpeg|png|gif|svg|css|js|ico|woff2?)$/.test(nextUrl.pathname);

            if (isAssetRequest) {
                return true; // Allow access to static assets
            }
            
            if (isOnProducts || isOnKitchen || isOnSales || isOnSupply || isOnInventory) {
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