import { Grid ,GridItem, Show} from "@chakra-ui/react";


function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }}>

    <GridItem w='1000px' area="nav" bg="red"> Nav</GridItem>
    <Show above="lg">
    <GridItem area="aside" bg="green">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="blue">Main</GridItem>
    
    </Grid>
  )
}

export default App;
