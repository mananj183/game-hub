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
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;