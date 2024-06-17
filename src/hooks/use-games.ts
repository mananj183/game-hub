import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

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
  type FetchGamesResponse = {
    count: number;
    results: Game[];
  };
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      });
      return () => controller.abort();
  }, []);

  return {games, error}
}

export default useGames;