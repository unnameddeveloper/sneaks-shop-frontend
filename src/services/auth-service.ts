import { IProduct, IUser } from "../types/types"

export default class AuthSrvice {
    static async addToBasket(data: IProduct, username: string) {
        // Добавляем продукт в базу данных (в модель пользователя)
    }
    static async getProduct(id: string) {

    }
    static async getUser(username: string) {
        
    }
}