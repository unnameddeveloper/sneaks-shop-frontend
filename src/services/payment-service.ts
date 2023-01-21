import axios, { AxiosResponse } from 'axios'
import { $api } from "../api/api";

export default class PaymentsService {
    static async createInvoiceLink() {
        return axios.post('https://sneaks-shop-backend.onrender.com/createinvoicelink')
    }
}
