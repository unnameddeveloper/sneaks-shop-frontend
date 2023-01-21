import PaymentsService from '../services/payment-service';
import UserService from '../services/user-service';
import { makeAutoObservable } from 'mobx'

export default class Store {
    isLoading = false
    username = ''

    constructor() {
        makeAutoObservable(this);
    };

    setLoading(type: boolean) {
        this.isLoading = type
    };

    setUsername(type: string) {
        this.username = type
    };

    async createInvoiceLink() {
        const invoiceLink = await PaymentsService.createInvoiceLink()
        console.log(invoiceLink.data.result)
        return invoiceLink.data.result
    }

    async getUser() {

    }
}
