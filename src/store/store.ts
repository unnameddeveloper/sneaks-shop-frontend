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
}
