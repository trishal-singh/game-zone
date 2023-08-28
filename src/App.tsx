import { Grid ,GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";


function App() {
  return (
    <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }} w="100vw" h="100vh">

    <GridItem  area="nav" > <Navbar/></GridItem>
    <Show above="lg">
    <GridItem area="aside" >Aside</GridItem>
    </Show>
    <GridItem area="main" overflow="auto"><GameGrid/></GridItem>
    
    </Grid>
    
    </>
  )
}

export default App;
