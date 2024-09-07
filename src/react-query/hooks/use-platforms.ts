import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/platforms";
import { CACHED_KEY_PLATFORMS } from "../Constants";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../services/api-client";
import ms from "ms";

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHED_KEY_PLATFORMS,
    queryFn: platformService.getAll,    
    staleTime: ms('24h'),
    initialData: platforms 
});

export default usePlatforms;