import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import useData from "./use-data";
import { Genre } from "./use-genres";

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
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;