import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import useData from "./use-data";


export type Genre = {
    id: number;
    name: string;
    image_background: string,
    slug: string
};
const useGenres = () => useData<Genre>('/genres');

export default useGenres;