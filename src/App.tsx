import { Grid ,GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }}>

    <GridItem w='100vw' area="nav" > <Navbar/></GridItem>
    <Show above="lg">
    <GridItem area="aside" bg="green">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="blue">Main</GridItem>
    
    </Grid>
  )
}

export default App;
