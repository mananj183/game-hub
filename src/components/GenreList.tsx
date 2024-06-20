import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/use-genres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize={8}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
