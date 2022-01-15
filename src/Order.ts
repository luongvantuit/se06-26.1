import { Product } from './Product'

export interface Order {
    product: Product,
    customer: string,
    payment: number,
    status: string,
    action: string
}