import axios from 'axios'

class PaymentsService {
    async createInvoiceLink() {
        const url = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/createInvoiceLink`;
        const params = {
            "title": "Test title",
            "description": "Invoice description",
            "payload": "Invoice payload",
            "provider_token": process.env.REACT_APP_PAYMENTTOKEN,
            "currency": "RUB",
            "prices": [{"label": "TestProduct", "amount": 100 * 100 }] // 100 копеек умножаем на 100 рублей 
        };

        const invoiceLink = await axios.post(url, params)

        return invoiceLink.data // { ok: statuscode, result: "https://t.me/invoicelink" }
    }
}

const service = new PaymentsService()
export default service