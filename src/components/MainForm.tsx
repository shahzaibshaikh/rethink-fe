import { Box, Button, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoteStateOne } from '../interfaces/NoteInterface';
import { setData } from '../store/slices/noteDetailSlice';
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

  return (
    <Box mt={3}>
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
          fontSize='sm'
          color='white'
          variant='solid'
          bg='purple.600'
          _hover={{ bg: 'gray.700', color: 'gray.100' }}
        >
          Save note
        </Button>
      </HStack>
    </Box>
  );
}

export default MainForm;
