import { Heading } from "@chakra-ui/react";
import { Genre } from "../react-query/services/genreService";
import { Platform } from "../react-query/services/platformService";

type Props = {
  genre: Genre | null;
  platform: Platform | null;
};
const GameHeading = ({ genre, platform }: Props) => {
  let headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
