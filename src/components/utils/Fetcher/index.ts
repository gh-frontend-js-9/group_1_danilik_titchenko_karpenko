import axios, { AxiosRequestConfig } from 'axios';
import config from './config';

const base_url: string = `${config.protocol}://${config.domain}`
// https://ghblogs.herokuapp.com/posts/?category=popular&page=1&limit=10

export enum FETCHER_MODE {
    NO_TOKEN
}

export default class Fetcher {
    constructor() {

    }

    token(mode: FETCHER_MODE): any {
        switch (mode) {
            case FETCHER_MODE.NO_TOKEN:
                return {
                    "Content-Type": "application-json"
                }
            default:
                return {
                    "Content-Type": "application-json"
                }
        }
    }

    get(path: string, mode?: FETCHER_MODE) {
        return axios({
            method: "GET",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE)
        })
    }
    post(path: string, data: AxiosRequestConfig, mode?: FETCHER_MODE, ) {
        return axios({
            method: "POST",
            url: path,
            headers: this.token(mode as FETCHER_MODE),
            data: JSON.stringify(data)
        })
    }
    put(path: string, data: AxiosRequestConfig, mode?: FETCHER_MODE){
        return axios({
            method: "PUT",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
            data: JSON.stringify(data)
        })
    }
    delete(path: string, data: AxiosRequestConfig, mode?: FETCHER_MODE){
        return axios({
            method: "DELETE",
            url: `${base_url}${path}`,
            headers: this.token(mode as FETCHER_MODE),
            data: JSON.stringify(data)
        })
    }
}