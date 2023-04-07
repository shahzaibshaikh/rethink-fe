import { Box, Heading, HStack } from '@chakra-ui/react';
import { BsFillFolderFill } from 'react-icons/bs';
import HorizontalLine from './HorizontalLine';
import NoteCard from './NoteCard';
import SearchInput from './SearchInput';

const notes = [
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Favorites'
    },
    _id: '642dcb49a8bb2a3e62b1b2e4',
    title: 'Abiha note with proper folder 1',
    content: 'Some random text',
    created_at: '2023-04-05T19:26:01.119Z',
    updated_at: '2023-04-01T19:27:03.576Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Thoughts'
    },
    _id: '642dccd097a7fad42482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-06-05T19:32:33.005Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Favorites'
    },
    _id: '642dccd097g7fad43482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Thoughts'
    },
    _id: '642dccd097a7fad434s2bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Memories'
    },
    _id: '642dbcd097a7fad43482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Space'
    },
    _id: '642d3cd097a7fad43482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Pakistan'
    },
    _id: '642dbcd097a7fad4g482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  }
];

function NotesListing() {
  const notesLength = notes.length;
  let count = 0;
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
          All notes
        </Heading>
      </HStack>
      <Box overflowY='auto' maxHeight='560px'>
        {notes.map(note => {
          {
            count++;
          }
          return (
            <Box key={note._id}>
              <NoteCard
                title={note.title}
                content={note.content}
                folder_name={note.folder.name}
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
