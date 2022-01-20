import { Product } from './IProduct'

export interface Order {
    product: Product,
    customer: string,
    payment: number,
    status: string,
    action: string
}