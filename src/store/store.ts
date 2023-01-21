import { makeAutoObservable } from 'mobx'
import PaymentsService from '../services/payment-service';

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

    async test() {
        const invoiceLink = await PaymentsService.createInvoiceLink()
        console.log(invoiceLink);
      }
}
