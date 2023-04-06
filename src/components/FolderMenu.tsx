import { Heading, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import brandImage from '../assets/rethink-logo-full.png';

let folders = [
  {
    _id: '642de3b8161eba381ea9c0e2',
    name: 'Favourites',
    user: '642c6f34b9719ff7f8aeffd4',
    is_deleted: false,
    created_at: '2023-04-05T21:10:16.905Z',
    updated_at: '2023-04-05T21:10:16.905Z',
    __v: 0
  },
  {
    _id: '642de431deaf25f2c9374132',
    name: 'Memories',
    user: '642c6f34b9719ff7f8aeffd4',
    is_deleted: false,
    created_at: '2023-04-05T21:12:17.461Z',
    updated_at: '2023-04-05T21:12:17.461Z',
    __v: 0
  },
  {
    _id: '642de439deaf25f2c9374135',
    name: 'Thoughts',
    user: '642c6f34b9719ff7f8aeffd4',
    is_deleted: false,
    created_at: '2023-04-05T21:12:25.931Z',
    updated_at: '2023-04-05T21:12:25.932Z',
    __v: 0
  }
];

function FolderMenu() {
  return (
    <div>
      <Image src={brandImage} width={40} />
      <Heading color='white' fontSize='18px' mt={12} mb={6}>
        Folders
      </Heading>

      <Text color='gray.500' fontSize='14px' fontWeight={700} mt={3}>
        All notes
      </Text>

      {folders.map(folder => (
        <Text key={folder._id} color='gray.500' fontSize='14px' fontWeight={700} mt={3}>
          {folder.name}
        </Text>
      ))}
    </div>
  );
}

export default FolderMenu;
