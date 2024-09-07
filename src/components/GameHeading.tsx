import { Heading } from "@chakra-ui/react";
import useGenre from "../react-query/hooks/use-genre";
import usePlatform from "../react-query/hooks/use-platform";

type Props = {
  genreId?: number;
  platformId?: number;
};
const GameHeading = ({ genreId, platformId }: Props) => {
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  let headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
