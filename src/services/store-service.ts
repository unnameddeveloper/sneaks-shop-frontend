import axios from "axios"


export default class StoreService {
    async addProductInCart(data: any) {
        try {
            return axios.post(`https://sneaks-shop-backend.onrender.com/addincart`, { data })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => addProductInCart()`)
        }
    }
    async deleteProductFromCart(data: any) {
        try {
            return axios.post(`https://sneaks-shop-backend.onrender.com/deletefromcart`, { data })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => deleteProductFromCart()`)
        }
    }
    async addProductInFavorite(data: any) {
        try {
            return axios.post(`https://sneaks-shop-backend.onrender.com/addinfavorite`, { data })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => addProductInFavorite()`)
        }
    }
    async deleteProductFromFavorite(data: any) {
        try {
            return axios.post(`https://sneaks-shop-backend.onrender.com/deletefromfavorite`, { data })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => deleteProductFromFavorite()`)
        }
    }
    async getProduct(data: any) {
        try {
            return axios.get(`https://sneaks-shop-backend.onrender.com/getproduct`, { data })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => getProduct()`)
        }
    }
}