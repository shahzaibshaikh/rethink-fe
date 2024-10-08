import { Box, Button, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { NoteStateOne } from '../interfaces/NoteInterface';
import { setData } from '../store/slices/noteDetailSlice';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';
import RichText from './RichText';
import useCreateNote from '../hooks/useCreateNote';
import useNotes from '../hooks/useNotes';

interface MainFormProps {
  setEditorStatus: (flag: boolean) => void;
  folder_id: string;
}

function MainForm({ setEditorStatus, folder_id }: MainFormProps) {
  const [isExistingNote, setIsExistingNote] = useState<boolean>(false);
  const { loading, data }: NoteStateOne = useSelector((state: any) => state.noteDetail);
  const { getNotes } = useNotes();
  const { createNote, saveNote, deleteNote } = useCreateNote();
  const dispatch = useDispatch();
  const now = new Date();

  useEffect(() => {
    data?._id ? setIsExistingNote(true) : setIsExistingNote(false);
  }, [isExistingNote, data]);

  function handleSave() {
    const payload = {
      title: data?.title as string,
      content: data?.content as string,
      folder_id: data?.folder?.folder_id as string
    };
    const token = localStorage.getItem('token');

    if (token && !isExistingNote)
      createNote(token, payload).then(() => getNotes(token, folder_id));
    if (token && isExistingNote)
      saveNote(token, { ...payload, id: data?._id }).then(() =>
        getNotes(token, folder_id)
      );
  }

  function handleDelete() {
    const token = localStorage.getItem('token');
    if (token)
      deleteNote(token, data?._id as string).then(() => {
        setEditorStatus(false);
        getNotes(token, folder_id);
      });
  }

  return (
    <Box mt={3} height='100%'>
      {loading ? (
        <Box display='grid' placeItems='center' height='100%'>
          <Spinner size='xl' color='purple.500' mb={6} mt={4} />
        </Box>
      ) : (
        <>
          <HStack width='100%' justifyContent='space-between' gap={2}>
            <form style={{ width: '100%' }}>
              <InputGroup>
                <Input
                  value={data?.title ?? ''}
                  placeholder='Title'
                  onChange={event =>
                    dispatch(setData({ ...data, title: event.target.value }))
                  }
                  border='none'
                  background='gray.700'
                  fontWeight={700}
                />
              </InputGroup>
            </form>
            {isExistingNote && (
              <NoteOptionsIcon folder_id={folder_id} setEditorStatus={setEditorStatus} />
            )}
          </HStack>
          <MainFormMeta
            folder_id={data?.folder?.folder_id ?? ''}
            folder_name={data?.folder?.name ?? 'All notes'}
            date={data?.updated_at ?? now.toString()}
          />
          <RichText />
          <HStack
            justifyContent={isExistingNote ? 'space-between' : 'flex-end'}
            alignItems='center'
            mt={3}
          >
            {isExistingNote && (
              <Button
                onClick={handleDelete}
                fontSize='sm'
                colorScheme='red'
                variant='outline'
              >
                Delete note
              </Button>
            )}
            <Button
              onClick={handleSave}
              fontSize='sm'
              color='white'
              variant='solid'
              bg='purple.600'
              _hover={{ bg: 'gray.700', color: 'gray.100' }}
            >
              Save note
            </Button>
          </HStack>
        </>
      )}
    </Box>
  );
}

export default MainForm;
