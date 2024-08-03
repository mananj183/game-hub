import { GameQuery } from "../App";
import useData from "./use-data";
import { Genre } from "./use-genres";
import { Platform } from "./use-platforms";

export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : Platform}[];   // Parent platform -> is an array of object which has a property 'platform' of the type : Platform
    metacritic: number;
  };
const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.ordering}}, [gameQuery]);

export default useGames;