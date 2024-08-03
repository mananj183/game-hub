import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/use-genres";
import { Platform } from "../hooks/use-platforms";

type Props = {
  genre: Genre | null;
  platform: Platform | null;
};
const GameHeading = ({ genre, platform }: Props) => {
  let headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {headingText} Games
    </Heading>
  );
};

export default GameHeading;
