import HttpService, { FetchResponse } from "./api-client";

export type Genre = {
    id: number;
    name: string;
    image_background: string,
    slug: string
};

export default new HttpService<Genre>('/genres')