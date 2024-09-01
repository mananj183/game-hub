import { AxiosRequestConfig } from "axios";
import HttpService, { FetchResponse } from "./api-client";
import { Platform } from "./platformService";

export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : Platform}[];   // Parent platform -> is an array of object which has a property 'platform' of the type : Platform
    metacritic: number;
    rating_top: number
};

const create = (reqConfig?: AxiosRequestConfig) => new HttpService<Game>('/games', reqConfig)

export default create;