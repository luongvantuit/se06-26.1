export interface Product {
    name: string,
    category: string,
    description: string,
    imageUrl: {
        cover: string,
        image1: string,
        image2: string,
        image3: string,
        image4: string,
        image5: string,
        image6: string,
        image7: string,
    },
    brand: string,
    warrantyType: string,
    price: number,
    saleOff: number,
    stock: number,
    skuCode: string,
    size: string,
    color: string,
    weight: number,
    parcelSize: {
        width: number,
        length: number,
        height: number
    },
    shippingType: string,
    sale: number
}