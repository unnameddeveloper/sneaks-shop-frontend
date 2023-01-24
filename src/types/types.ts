export interface IProduct {
    id: string,
    image: string[],
    name: string,
    price: number,
    sizes: number[]
    descritpion: string,
}

export interface IProductInCart {
    id: string,
    image: string[],
    name: string,
    price: number,
    choosenSize: number,
    descritpion: string,
}

export interface IUser {
    image: string,
    username: string,
    shoppingCart: IProductInCart[],
    favoriteCart: IProductInCart[],
    orders: IProductInCart[]
    email: string,
    phoneNumber: string,
}