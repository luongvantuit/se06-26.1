export interface IProduct {
    description: string,
    sid: string,
    displayName:string,
    photos: [],
    address: string,
    classifies: [],
    categories:[],
    state:string,
    date: Date,
    price:number,
    deleted: boolean
}