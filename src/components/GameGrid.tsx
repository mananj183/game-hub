import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../react-query/hooks/use-games";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  if (error) return <Text>{error.message}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create a dummy array with the item number equal to the number of skeletons objects we want to display on the screen
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.length === 0 ? (
        <Text>No Games Found</Text>
      ) : (
        data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))
      )}
    </SimpleGrid>
  );
};

export default GameGrid;
