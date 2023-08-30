import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
  const [selectedplatform, setselectedplatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            onSelectGenre={(genre) => setselectedgenre(genre)}
            selectedGenre={selectedgenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" overflow="auto">
        <PlatformSelector
          selectedPlatform={selectedplatform}
          onSelectPlatform={(platform) => setselectedplatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedplatform}
          selectedGenre={selectedgenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
