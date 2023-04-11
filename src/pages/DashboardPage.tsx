import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FolderMenu from '../components/FolderMenu';
import MainForm from '../components/MainForm';
import NotesListing from '../components/NotesListing';
import useFolders from '../hooks/useFolders';
import useNoteDetail from '../hooks/useNoteDetail';
import useNotes from '../hooks/useNotes';
import NotePlaceholderPage from '../components/NotePlaceholderPage';
import NoteListingPlaceholder from '../components/NoteListingPlaceholder';

function DashboardPage() {
  const navigate = useNavigate();
  const [selectedFolder, setSelectedFolder] = useState({
    folder_id: 'all',
    folder_name: 'All notes'
  });
  const [selectedNote, setSelectedNote] = useState<string | undefined>();
  const [isEditorReady, setIsEditorReady] = useState(false);
  const { loading, data, getNotes } = useNotes();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedExpiration = localStorage.getItem('tokenExpiration');
    if (storedToken) getNotes(storedToken, selectedFolder.folder_id);
    if (
      !storedToken ||
      !storedExpiration ||
      new Date().getTime() > parseInt(storedExpiration)
    )
      navigate('/login');
  }, [selectedFolder]);

  useFolders();
  useNoteDetail(selectedNote);
  return (
    <Grid
      gridTemplateAreas={{ lg: `"aside center main"`, base: `"center main"` }}
      gridTemplateColumns={{ lg: '250px 300px auto', base: '1fr 2fr' }}
    >
      <Show above='lg'>
        <GridItem area='aside' background='gray.800' height='100vh' padding={8}>
          <FolderMenu
            setEditorStatus={(value: boolean) => setIsEditorReady(value)}
            setSelectFolder={(folder_id: string, folder_name: string) => {
              setSelectedFolder({ ...selectedFolder, folder_id, folder_name });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area='center' background='gray.700' height='100vh' padding={4}>
        {!data || data.length === 0 ? (
          <NoteListingPlaceholder />
        ) : (
          <NotesListing
            folder_name={selectedFolder.folder_name}
            setNoteDetail={(note_id: string) => {
              setSelectedNote(note_id);
              setIsEditorReady(true);
            }}
          />
        )}
      </GridItem>
      <GridItem area='main' background='gray.600' height='100vh' padding={6}>
        {isEditorReady ? (
          <MainForm
            setEditorStatus={(value: boolean) => setIsEditorReady(value)}
            folder_id={selectedFolder.folder_id}
          />
        ) : (
          <NotePlaceholderPage />
        )}
      </GridItem>
    </Grid>
  );
}

export default DashboardPage;
