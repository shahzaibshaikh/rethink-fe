import { Heading, HStack } from '@chakra-ui/react';
import { HiFolder } from 'react-icons/hi';
import NoteCard from './NoteCard';

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
    updated_at: '2023-04-05T19:27:03.576Z'
  },
  {
    folder: {
      folder_id: '642dcb67a8bb2a3e62b1b2e8',
      name: 'Favorites'
    },
    _id: '642dccd097a7fad43482bc0a',
    title: 'Abiha note with proper folder 2',
    content:
      'Some random text 2 aksjdn akjsnd kjansd kjansdkj anskdj naksjdn kjasnd jkasndkj ansdkjnas kjdn ',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  }
];

function NotesListing() {
  return (
    <div>
      <HStack color='gray.500' mt={4} mb={8}>
        <HiFolder size={24} />
        <Heading color='white' fontSize='18px' mb={6}>
          All notes
        </Heading>
      </HStack>

      {notes.map(note => (
        <NoteCard
          title={note.title}
          content={note.content}
          folder_name={note.folder.name}
        />
      ))}
    </div>
  );
}

export default NotesListing;
