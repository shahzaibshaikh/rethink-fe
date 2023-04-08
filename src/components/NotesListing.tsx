import { Box, Heading, HStack } from '@chakra-ui/react';
import { BsFillFolderFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NoteInfo, NoteState } from '../interfaces/NoteInterface';
import HorizontalLine from './HorizontalLine';
import NoteCard from './NoteCard';
import SearchInput from './SearchInput';

interface NoteListingProps {
  folder_name: string;
}

function NotesListing({ folder_name }: NoteListingProps) {
  const { loading, data }: NoteState = useSelector((state: any) => state.notes);
  const notesLength: number = data?.length ?? 0;
  let count = 0;
  console.log(data);

  return (
    <Box>
      <SearchInput />
      <HStack color='gray.500' mt={9} mb={6}>
        <BsFillFolderFill size={22} />
        <Heading
          color='white'
          fontSize='18px'
          mb={6}
          noOfLines={1}
          overflowWrap='break-word'
        >
          {folder_name}
        </Heading>
      </HStack>
      <Box overflowY='auto' maxHeight='560px'>
        {data &&
          data.map((note: NoteInfo) => {
            {
              count++;
            }
            return (
              <Box key={note._id}>
                <NoteCard
                  title={note.title}
                  content={note.content}
                  folder_name={note?.folder?.name}
                  updated_at={note.updated_at}
                />
                {count !== notesLength && <HorizontalLine />}
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default NotesListing;
