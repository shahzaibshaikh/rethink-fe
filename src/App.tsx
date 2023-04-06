import { Box, Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      gridTemplateAreas={{ lg: `"aside center main"`, base: `"center main"` }}
      gridTemplateColumns={{ lg: '250px 300px auto', base: '1fr 2fr' }}
    >
      <Show above='lg'>
        <GridItem area='aside' background='gray.800' height='100vh'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='center' background='gray.700' height='100vh'>
        Center
      </GridItem>
      <GridItem area='main' background='gray.700' height='100vh' padding={3}>
        <Box background='gray.200' color='gray.900' borderRadius={10} height='100%'>
          Main
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
