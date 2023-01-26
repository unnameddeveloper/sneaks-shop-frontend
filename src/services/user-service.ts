import { IProduct, IUser } from "../types/types"
import axios, { AxiosResponse } from "axios"


export default class UserSrvice {
    static async addNewUserData(data: any) {
        try {
            return axios.post(`${process.env.REACT_APP_BAKENDURL}/addnewuserdata`, { data })
        } catch (error) {
            console.log(error)
            return console.log(`Errot / user-service.js => addNewUserData()`)
        }
    }
    static async getUser(data: any) {
        try {
            return axios.get(`${process.env.REACT_APP_BAKENDURL}/user/${data.username}`, { data })
        } catch (error) {
            console.log(error)
            return console.log(`Errot / user-service.js => getUser()`)
        }
    }
}

