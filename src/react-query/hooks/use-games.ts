import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => gamesService({
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.ordering, search: gameQuery.search
    }
  }).getAll()
})

export default useGames;