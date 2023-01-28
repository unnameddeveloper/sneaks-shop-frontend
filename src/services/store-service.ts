import { IProductInCart } from "../types/types"
import axios, { AxiosResponse } from "axios"
import { backendURL } from "../api/api"


export default class StoreService {
    static async addProductInCart(username: string, product: IProductInCart): Promise<AxiosResponse> {
        try {
            return axios.post(`${backendURL}/addincart`, { username, product })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => addProductInCart()`)
        }
    }
    static async deleteProductFromCart(username: string, productId: string) {
        try {
            return axios.post(`${backendURL}/deletefromcart`, { username, productId })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => deleteProductFromCart()`)
        }
    }
    static async addProductInFavorite(username: string, product: IProductInCart) {
        try {
            return axios.post(`${backendURL}/addinfavorite`, { username, product })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => addProductInFavorite()`)
        }
    }
    static async deleteProductFromFavorite(username: string, productId: string) {
        try {
            return axios.post(`${backendURL}/deletefromfavorite`, { username, productId })
        } catch (error) {
            console.log(error)
            console.log(`Error / store-service.js => deleteProductFromFavorite()`)
        }
    }
    // static async getProduct(data: any) {
    //     try {
    //         return axios.get(`${backendURL}/getproduct`, { data })
    //     } catch (error) {
    //         console.log(error)
    //         console.log(`Error / store-service.js => getProduct()`)
    //     }
    // }
}