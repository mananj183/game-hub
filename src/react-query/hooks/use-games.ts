import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => gamesService({
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.ordering, 
      search: gameQuery.search,
      page: pageParam
    }
  }).getAll(),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length+1 : undefined,
  staleTime: 24 * 60 * 60 * 1000  // 24hrs
})

export default useGames;