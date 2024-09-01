import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Genre } from "./react-query/services/genreService";
import { Platform } from "./react-query/services/platformService";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
};
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // since base has only 1 column, we apply a column size of 1 fraction that is to take up the complete space available
        lg: "200px 1fr", //since lg has two columns therefore the first column takes 200px space and the other column takes the remaining space completely
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, search: searchText })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <VStack align={"flex-start"} paddingLeft={3} marginBottom={4}>
          <GameHeading genre={gameQuery.genre} platform={gameQuery.platform} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.ordering}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, ordering: sortOrder })
              }
            />
          </HStack>
        </VStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
