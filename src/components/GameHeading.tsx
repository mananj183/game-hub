import { Heading } from "@chakra-ui/react";
import { Genre } from "../react-query/services/genreService";
import { Platform } from "../react-query/services/platformService";
import useGenres from "../react-query/hooks/use-genres";
import usePlatforms from "../react-query/hooks/use-platforms";

type Props = {
  genreId?: number;
  platformId?: number;
};
const GameHeading = ({ genreId, platformId }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (platform) => platform.id === platformId
  );
  const genre = genres.results.find((genre) => genre.id === genreId);
  let headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
