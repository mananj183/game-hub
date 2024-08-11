import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

class HttpService {
    endpoint: string
    requestConfig?: AxiosRequestConfig
    
    constructor(endpoint: string, requestConfig?: AxiosRequestConfig){
        this.endpoint = endpoint;
        this.requestConfig = requestConfig;

    }

    getAll<T>(){
        const controller = new AbortController();
        const req = apiClient.get<T>(this.endpoint, {signal: controller.signal});
        return {req, cancel: () => controller.abort()}
    }
}

function create(endpoint: string, requestConfig?: AxiosRequestConfig) { return new HttpService(endpoint, requestConfig)};

export default create;