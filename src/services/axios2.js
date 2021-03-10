import Axios from 'axios';

export const LOCALSTORAGE_TOKEN_KEY = "token";
export const BASE_URL = "http://localhost:3052";
export const dataFromResponse = response => response.data;

export const makeAxios2 = () => Axios.create({
    baseURL: BASE_URL,
    headers: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? {
        token: `${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
    } : {}
});
