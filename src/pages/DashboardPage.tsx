import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FolderMenu from '../components/FolderMenu';
import MainForm from '../components/MainForm';
import NotesListing from '../components/NotesListing';
import useFolders from '../hooks/useFolders';
import useNotes from '../hooks/useNotes';

function DashboardPage() {
  const navigate = useNavigate();
  const [selectedFolder, setSelectedFolder] = useState({
    folder_id: 'all',
    folder_name: 'All notes'
  });
  useFolders();
  useNotes(selectedFolder.folder_id);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, []);

  return (
    <Grid
      gridTemplateAreas={{ lg: `"aside center main"`, base: `"center main"` }}
      gridTemplateColumns={{ lg: '250px 300px auto', base: '1fr 2fr' }}
    >
      <Show above='lg'>
        <GridItem area='aside' background='gray.800' height='100vh' padding={8}>
          <FolderMenu
            setSelectFolder={(folder_id: string) =>
              setSelectedFolder({ ...selectedFolder, folder_id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area='center' background='gray.700' height='100vh' padding={4}>
        <NotesListing />
      </GridItem>
      <GridItem area='main' background='gray.600' height='100vh' padding={6}>
        <MainForm />
      </GridItem>
    </Grid>
  );
}

export default DashboardPage;
