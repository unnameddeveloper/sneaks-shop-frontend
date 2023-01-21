import { $api } from "../api/api";
import { AxiosResponse } from 'axios'

export default class PaymentsService {
    static async createInvoiceLink(): Promise<AxiosResponse> {
        return $api.post('/createinvoicelink')
    }
}
