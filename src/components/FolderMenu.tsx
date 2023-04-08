import { Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import brandImage from '../assets/rethink-logo-full.png';
import { BsFillFolderFill } from 'react-icons/bs';
import { HiFolderPlus } from 'react-icons/hi2';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FolderInfo } from '../interfaces/FolderInterfaces';
import { MouseEventHandler } from 'react';

interface FolderMenuProps {
  folders: FolderInfo[] | null;
  setSelectFolder: (folder_id: string, folder_name: string) => void;
}

function FolderMenu({ folders, setSelectFolder }: FolderMenuProps) {
  return (
    <div>
      <Image src={brandImage} width={36} />

      <Button
        fontSize='sm'
        mt={7}
        leftIcon={<AiOutlinePlusCircle size={20} />}
        width='100%'
        color='white'
        bg='purple.600'
        variant='solid'
        _hover={{ bg: 'gray.700', color: 'gray.100' }}
      >
        New note
      </Button>

      <Heading color='white' fontSize='18px' mt={7} mb={6}>
        Folders
      </Heading>

      <HStack
        color='gray.500'
        _hover={{ color: 'white', transition: '300ms' }}
        onClick={() => setSelectFolder('all', 'All notes')}
        cursor='pointer'
      >
        <BsFillFolderFill size={16} />
        <Text fontSize='14px' fontWeight={700}>
          All notes
        </Text>
      </HStack>

      {folders &&
        folders.map(folder => (
          <HStack
            onClick={() => setSelectFolder(folder._id, folder.name)}
            cursor='pointer'
            key={folder._id}
            color='gray.500'
            mt={4}
            _hover={{ color: 'white', transition: '300ms' }}
          >
            <BsFillFolderFill size={16} />
            <Text fontSize='14px' fontWeight={700}>
              {folder.name}
            </Text>
          </HStack>
        ))}

      <HStack color='gray.500' mt={4} _hover={{ color: 'white', transition: '300ms' }}>
        <HiFolderPlus size={17} />
        <Text fontSize='14px' fontWeight={700}>
          Add folder
        </Text>
      </HStack>
    </div>
  );
}

export default FolderMenu;
