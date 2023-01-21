import axios from 'axios';

export const API_URL = `https://sneaks-shop-backend.onrender.com`

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})