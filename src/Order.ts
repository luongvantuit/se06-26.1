import { IProduct } from './IProduct'

export interface Order {
    uid: string,
    date:Date,
    product: IProduct,
    customer: string,
    payment: number,
    status: string,
    amount: number,
    action: string
}