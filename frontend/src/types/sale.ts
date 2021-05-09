import { seller } from "./seller"

export type sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: seller;
}

export type SalePage = {
    content?: sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    first: boolean;
    numberOfElements?: number;
    number: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string,
    sum: number
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}

