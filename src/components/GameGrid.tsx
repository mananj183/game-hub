import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../react-query/hooks/use-games";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  gameQuery: GameQuery;
};
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  if (error) return <Text>{error.message}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create a dummy array with the item number equal to the number of skeletons objects we want to display on the screen
  const numberOfGames = data?.pages.reduce(
    (accumulator, currentValue) => accumulator + currentValue.results.length,
    0
  );
  return (
    <InfiniteScroll
      dataLength={numberOfGames || 0}
      next={fetchNextPage}
      hasMore={hasNextPage || false} // or we can use !!hasNextPage -> double ! will convert the undefined into boolean value false
      loader={
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.length === 0 ? (
          <Text>No Games Found</Text>
        ) : (
          data?.pages.map((page, i) => {
            return (
              <React.Fragment key={i}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                  </GameCardContainer>
                ))}
              </React.Fragment>
            );
          })
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
