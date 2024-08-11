import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import create from "../services/http-service";


type FetchResponse<T> = {
    count: number;
    results: T[];
};
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
    const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const {req, cancel} = create(endpoint, requestConfig).getAll<FetchResponse<T>>();
    // apiClient
    //   .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
      req.then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });
      return () => cancel();
  }, dependencies ? [...dependencies] : []);

  return {data, error, isLoading}
}

export default useData;