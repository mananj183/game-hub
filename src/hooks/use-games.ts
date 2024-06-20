import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import useData from "./use-data";

export type Platform = {
    id: number;
    name: string;
    slug: string;
}
export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : Platform}[];   // Parent platform -> is an array of object which has a property 'platform' of the type : Platform
    metacritic: number;
  };
const useGames = () => useData<Game>('/games');

export default useGames;