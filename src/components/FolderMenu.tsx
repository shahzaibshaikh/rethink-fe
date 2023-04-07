import { Heading, HStack, Image, Text } from '@chakra-ui/react';

import brandImage from '../assets/rethink-logo-full.png';
import { HiFolder } from 'react-icons/hi';
import { HiFolderPlus } from 'react-icons/hi2';

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
      <Image src={brandImage} width={36} />
      <Heading color='white' fontSize='18px' mt={9} mb={8}>
        Folders
      </Heading>

      <HStack color='gray.500' _hover={{ color: 'white', transition: '300ms' }}>
        <HiFolder size={20} />
        <Text fontSize='14px' fontWeight={700}>
          All notes
        </Text>
      </HStack>

      {folders.map(folder => (
        <HStack
          key={folder._id}
          color='gray.500'
          mt={4}
          _hover={{ color: 'white', transition: '300ms' }}
        >
          <HiFolder size={20} />
          <Text fontSize='14px' fontWeight={700}>
            {folder.name}
          </Text>
        </HStack>
      ))}

      <HStack color='gray.500' mt={4} _hover={{ color: 'white', transition: '300ms' }}>
        <HiFolderPlus size={18} />
        <Text fontSize='14px' fontWeight={700}>
          Add folder
        </Text>
      </HStack>
    </div>
  );
}

export default FolderMenu;
