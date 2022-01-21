import { Product } from './IProduct'

export interface Order {
    product: Product,
    customer: string,
    payment: number,
    status: string,
    quantity: number,
    action: string
}