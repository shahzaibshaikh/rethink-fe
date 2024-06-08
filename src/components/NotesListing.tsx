import { Box, Heading, HStack } from '@chakra-ui/react';
import { BsFillFolderFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NoteInfo, NoteState } from '../interfaces/NoteInterface';
import HorizontalLine from './HorizontalLine';
import NoteCard from './NoteCard';
import NoteCardSkeleton from './NoteCardSkeleton';
import SearchInput from './SearchInput';

interface NoteListingProps {
  folder_name: string;
  setNoteDetail: (note_id: string) => void;
}

function NotesListing({ folder_name, setNoteDetail }: NoteListingProps) {
  const { loading, data }: NoteState = useSelector((state: any) => state.notes);
  const skeletons = [1, 2, 3, 4, 5];
  const notesLength: number = data?.length ?? 0;
  let count = 0;

  return (
    <Box>
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
        {loading
          ? skeletons.map(skeleton => (
              <Box key={skeleton}>
                <NoteCardSkeleton />
                <HorizontalLine />
              </Box>
            ))
          : data &&
            data.map((note: NoteInfo) => {
              {
                count++;
              }
              return (
                <Box key={note?._id} onClick={() => setNoteDetail(note._id)}>
                  <NoteCard
                    title={note?.title}
                    content={note?.content}
                    folder_name={note?.folder?.name ?? ''}
                    updated_at={note?.updated_at}
                    is_favorite={note?.is_favorite}
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
