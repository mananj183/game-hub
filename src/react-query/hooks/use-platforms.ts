import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/platforms";
import { CACHED_KEY_PLATFORMS } from "../Constants";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../services/api-client";

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHED_KEY_PLATFORMS,
    queryFn: platformService.getAll,    
    staleTime: 24 * 60 * 60 * 1000,  // 24hrs
    initialData: {count: platforms.length, next: "", results: platforms}  
});

export default usePlatforms;