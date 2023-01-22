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
        this.isLoading = true
        try {
            const invoiceLink = await PaymentsService.createInvoiceLink()
            return invoiceLink.data.result 
        } catch (error) {
            return console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async getUser() {

    }
}
