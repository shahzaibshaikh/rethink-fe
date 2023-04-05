import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside nav" "aside main"`
      }}
    >
      <GridItem area='nav'>Nav</GridItem>
      <GridItem area='aside'>Aside</GridItem>
      <GridItem area='main'>Main</GridItem>
    </Grid>
  );
}

export default App;
