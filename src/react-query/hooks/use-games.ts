import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";
import ms from "ms";

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => gamesService({
    params: {
      genres: gameQuery.genreId, 
      parent_platforms: gameQuery.platformId, 
      ordering: gameQuery.ordering, 
      search: gameQuery.search,
      page: pageParam
    }
  }).getAll(),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length+1 : undefined,
  staleTime: ms('24h')
})

export default useGames;