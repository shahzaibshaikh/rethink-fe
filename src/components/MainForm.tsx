import { Box, Button, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { NoteStateOne } from '../interfaces/NoteInterface';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/noteDetailSlice';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';
import RichText from './RichText';

function MainForm() {
  const [isExistingNote, setIsExistingNote] = useState<boolean>(false);
  const { loading, data }: NoteStateOne = useSelector((state: any) => state.noteDetail);
  const dispatch = useDispatch();
  const now = new Date();

  useEffect(() => {
    data?._id ? setIsExistingNote(true) : setIsExistingNote(false);
  }, [isExistingNote, data]);

  function handleSubmit() {
    const payload = {
      title: data?.title,
      content: data?.content
    };
    const token = localStorage.getItem('token');
    async function createNote() {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.post(
          '/api/notes',
          {
            title: data?.title,
            content: data?.content
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            }
          }
        );

        dispatch(setData(response.data.note));
        return true;
      } catch (error: any) {
        dispatch(setError(error.response.data.error));
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    }
    if (token) createNote();
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
            <NoteOptionsIcon />
          </HStack>
          <MainFormMeta
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
              <Button fontSize='sm' colorScheme='red' variant='outline'>
                Delete note
              </Button>
            )}
            <Button
              onClick={handleSubmit}
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
