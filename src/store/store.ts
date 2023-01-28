import PaymentsService from '../services/payment-service';
import StoreService from '../services/user-service';
import UserService from '../services/user-service';
import { makeAutoObservable } from 'mobx'

export interface INewUserData {
    phoneNumber: string,
    email: string
}

export interface IGetUserData {
    username: string
}

export default class Store {
    isLoading = false
    username = ''
    footerMenu = true

    constructor() {
        makeAutoObservable(this);
    };

    setLoading(type: boolean) {
        this.isLoading = type
    };

    setUsername(type: string) {
        this.username = type
    };

    setFooterMenu(type: boolean) {
        this.footerMenu = type
    };

    async createInvoiceLink(totalShopCartPrice: number) {
        this.isLoading = true
        try {
            const invoiceLink = await PaymentsService.createInvoiceLink(totalShopCartPrice)
            return invoiceLink.data.result 
        } catch (error) {
            return console.log(error)
        } finally {
            this.isLoading = false
        }
    }
}
