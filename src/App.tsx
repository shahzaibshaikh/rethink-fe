import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      gridTemplateAreas={{ md: `"aside center main"`, base: `"center main"` }}
      gridTemplateColumns={{ md: '200px 300px auto', base: 'repeat(3, 1fr)' }}
    >
      <Show above='md'>
        <GridItem>Aside</GridItem>
      </Show>
      <GridItem>Center</GridItem>
      <GridItem>Main</GridItem>
    </Grid>
  );
}

export default App;
