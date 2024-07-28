import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/use-genres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

type Props = {
  onSelectGenre: (genre: Genre) => void;
};
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const genreListSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) {
    return null;
  }
  return (
    <List>
      {isLoading &&
        genreListSkeletons.map((genre) => <GenreListSkeleton key={genre} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize={8}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
