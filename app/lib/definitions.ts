export type Product = {
    id:string,
    name: string;
    quantity: number;
    price: number;
}

export type Kitchen = {
    id: string;
    rawproduct: string;
    type: string;
    quantity: number;
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

export type Sale = {
    id: string;
    type: string;
    quantity: number;
}

export type Supply = {
    id: string;
    product: string;
    quantity: number;
    price: number;
}