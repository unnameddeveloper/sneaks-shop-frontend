export interface IProduct {
    id: string,
    images: string[],
    name: string,
    price: number,
    sizes: {size: string}[]
    descritpion: string,
}

export interface IProductInCart {
    id: string,
    images: string[],
    name: string,
    price: number,
    choosenSize?: number,
    descritpion: string,
}

export interface IUser {
    image: string,
    username: string,
    email: string,
    phoneNumber: string,
    shoppingCart: IProductInCart[],
    favoriteCart: IProductInCart[],
    orders: IProductInCart[]
}