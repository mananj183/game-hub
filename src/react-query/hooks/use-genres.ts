import { useQuery } from "@tanstack/react-query";
import { CACHED_KEY_GENRES } from "../Constants";
import genreService, { Genre } from "../services/genreService";
import genres from "../../data/genres";
import { FetchResponse } from "../services/api-client";


const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHED_KEY_GENRES,
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000,  // 24hrs
        initialData: {count: genres.length, results: genres}        
    })
};

export default useGenres;