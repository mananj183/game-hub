import HttpService, { FetchResponse } from "./api-client";

export type Platform = {
    id: number;
    name: string;
    slug: string;
}

export default  new HttpService<Platform>('/platforms/lists/parents')