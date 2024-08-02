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
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;