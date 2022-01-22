import { IProduct } from './IProduct'

export interface Order {
    product: IProduct,
    customer: string,
    payment: number,
    status: string,
    quantity: number,
    action: string
}