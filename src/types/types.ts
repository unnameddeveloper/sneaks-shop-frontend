export interface IProduct {
    id: string,
    image: string,
    name: string,
    price: number,
    descritpion: string,
}

export interface IUser {
    username: string,
    accessToken: string,
    refreshToken: string,
}