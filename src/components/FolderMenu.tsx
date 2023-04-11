import { Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import brandImage from '../assets/rethink-logo-full.png';
import { BsFillFolderFill } from 'react-icons/bs';
import { HiFolderPlus } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';
import { FolderInfo, FolderState } from '../interfaces/FolderInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/slices/noteDetailSlice';

interface FolderMenuProps {
  setSelectFolder: (folder_id: string, folder_name: string) => void;
  setEditorStatus: (flag: boolean) => void;
  selectedFolder: string;
}

function FolderMenu({
  setSelectFolder,
  setEditorStatus,
  selectedFolder
}: FolderMenuProps) {
  const dispatch = useDispatch();
  const { loading, data }: FolderState = useSelector((state: any) => state.folders);
  return (
    <div>
      <Image src={brandImage} width={36} />

      <Button
        onClick={() => {
          dispatch(setData(null));
          setEditorStatus(true);
        }}
        fontSize='sm'
        mt={7}
        leftIcon={<HiPencilSquare size={20} />}
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
        color={selectedFolder === 'all' ? 'white' : 'gray.500'}
        _hover={{ color: 'white', transition: '300ms' }}
        onClick={() => setSelectFolder('all', 'All notes')}
        cursor='pointer'
      >
        <BsFillFolderFill size={16} />
        <Text fontSize='14px' fontWeight={700}>
          All notes
        </Text>
      </HStack>

      {data &&
        data.map((folder: FolderInfo) => (
          <HStack
            onClick={() => setSelectFolder(folder._id, folder.name)}
            cursor='pointer'
            key={folder._id}
            color={selectedFolder === folder._id ? 'white' : 'gray.500'}
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
