export interface IProduct {
    id: string,
    image: string,
    name: string,
    price: number,
    sizes: number[]
    descritpion: string,
}

export interface IProductInCart {
    id: string,
    image: string,
    name: string,
    price: number,
    size: number,
    descritpion: string,
}

export interface IUser {
    username: string,
    shoppingCart: IProductInCart[],
    email: string,
    phoneNumber: string,
}