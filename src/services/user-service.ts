import { IProduct, IUser } from "../types/types"
import axios, { AxiosResponse } from "axios"
import { backendURL } from "../api/api"

interface INewUserData {
    username: string,
    phoneNumber: string,
    email: string
}

export default class UserSrvice {
    static async addNewUserData(data: INewUserData): Promise<AxiosResponse> {
        try {
            return axios.post(`${backendURL}/addnewuserdata`, { data }) 
        } catch (error) {
            console.log(error)
            console.log(`Errot / user-service.js => addNewUserData()`)
        }
    }
    static async getUser(username: string): Promise<AxiosResponse<IUser>> {
        try {
            return axios.post<IUser>(`${backendURL}/getuser`, { username })
        } catch (error) {
            console.log(error)
            console.log(`Errot / user-service.js => getUser()`)
        }
    }
}

