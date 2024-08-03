import genres from "../data/genres";

export type Genre = {
    id: number;
    name: string;
    image_background: string,
    slug: string
};
const useGenres = () => ({data: genres, error: null, isLoading: false});

export default useGenres;