import useGenres from "../hooks/use-genres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
