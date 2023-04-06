import { Grid, GridItem, Show } from '@chakra-ui/react';

import FolderMenu from '../components/FolderMenu';
import NotesListing from '../components/NotesListing';

function DashboardPage() {
  return (
    <Grid
      gridTemplateAreas={{ lg: `"aside center main"`, base: `"center main"` }}
      gridTemplateColumns={{ lg: '250px 300px auto', base: '1fr 2fr' }}
    >
      <Show above='lg'>
        <GridItem area='aside' background='gray.800' height='100vh' padding={8}>
          <FolderMenu />
        </GridItem>
      </Show>
      <GridItem area='center' background='gray.700' height='100vh' padding={4}>
        <NotesListing />
      </GridItem>
      <GridItem area='main' background='gray.600' height='100vh' padding={3}>
        Main
      </GridItem>
    </Grid>
  );
}

export default DashboardPage;
