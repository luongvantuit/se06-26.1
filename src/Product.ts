export interface Product {
    name: string,
    category: string,
    descripyion: string,
    imageUrl: {
        "cover": string,
        "image1": string,
        "image2": string,
        "image3": string,
        "image4": string,
        "image5": string,
        "image6": string,
        "image7": string,
    },
    brand: string,
    warrantyType: string,
    price: number,
    stock: number,
    skuCode: string,
    weight: number,
    parcelSize: {
        width: number,
        length: number,
        height: number
    },
    shippingType: string
}