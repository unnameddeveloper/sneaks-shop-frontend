import axios, { AxiosResponse } from 'axios'

interface Invoice {
    ok: boolean, 
    result: string
}

export default class PaymentsService {
    static async createInvoiceLink(totalShopCartPrice: number): Promise<AxiosResponse<Invoice>> {
        return axios.post<Invoice>('https://sneaks-shop-backend.onrender.com/createinvoicelink', { totalShopCartPrice })
    }
}
