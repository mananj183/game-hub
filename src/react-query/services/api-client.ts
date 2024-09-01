import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
    count: number;
    results: T[];
};

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '42ba7e06952b46fa92e36a81fe804ca1'
    }
})

export default class HttpService<T> {
    endpoint: string
    requestConfig?: AxiosRequestConfig
    
    constructor(endpoint: string, requestConfig?: AxiosRequestConfig){
        this.endpoint = endpoint;
        this.requestConfig = requestConfig;

    }

    getAll= () => axiosInstance.get<FetchResponse<T>>(this.endpoint, {...this.requestConfig}).then(res => res.data);
    //     {
    //     // const controller = new AbortController();    , {signal: controller.signal, ...this.requestConfig}
    //     // const res =  axiosInstance.get<T>(this.endpoint).then(res => res.data);
    //     // return res;
    //     // return {res, cancel: () => controller.abort()}
    // }
    post = (data: T) => axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
}

export const create = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => new HttpService<T>(endpoint, requestConfig)