import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../react-query/hooks/use-genres";
import getCroppedImageUrl from "../react-query/services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../react-query/services/genreService";

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const genreListSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) {
    return null;
  }
  return (
    <>
      <Heading fontSize="2xl" marginBottom="10px">
        Genres
      </Heading>
      <List>
        {isLoading &&
          genreListSkeletons.map((genre) => <GenreListSkeleton key={genre} />)}
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
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
    </>
  );
};
export default GenreList;
