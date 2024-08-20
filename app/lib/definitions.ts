import { redirect } from 'next/navigation';
export type product = {
    name: string;
    quantity: number;
    price: number;
}

export type User = {
    id: string;
    name: string;
    username: string;
    password: string;
};

export type LoginInfo = {
    redirect: boolean;
    callbackUrl: string;
    username: string;
    password: string;
};
