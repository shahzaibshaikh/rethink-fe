import { Heading, HStack } from '@chakra-ui/react';
import { HiFolder } from 'react-icons/hi';

const notes = [
  {
    folder: {
      folderId: '642dcb67a8bb2a3e62b1b2e8',
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
    content: 'Some random text 2',
    created_at: '2023-04-05T19:32:33.005Z',
    updated_at: '2023-04-05T19:32:33.005Z'
  }
];

function NotesListing() {
  return (
    <div>
      <HStack color='gray.500' mt={4}>
        <HiFolder size={24} />
        <Heading color='white' fontSize='18px' mb={6}>
          All notes
        </Heading>
      </HStack>
    </div>
  );
}

export default NotesListing;
