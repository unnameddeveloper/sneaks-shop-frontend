import { IProduct, IUser } from "../types/types"

class UserSrvice {
    async addToBasket(data: IProduct, username: string) {
        // Добавляем продукт в базу данных (в модель пользователя)
    }
    async getProduct(id: string) {

    }
    async getUser(username: string) {
        
    }
}

const service = new UserSrvice()
export default service 

