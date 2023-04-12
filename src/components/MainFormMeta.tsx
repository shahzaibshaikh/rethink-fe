import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BsChevronDown, BsFillCalendar3WeekFill, BsFillFolderFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import useCreateNote from '../hooks/useCreateNote';
import useFolders from '../hooks/useFolders';
import useNoteDetail from '../hooks/useNoteDetail';
import { FolderInfo, FolderState } from '../interfaces/FolderInterfaces';
import formatDate from '../utilities/dateFormatter';
import HorizontalLine from './HorizontalLine';

interface MainFormMetaProps {
  date: string;
  folder_name: string;
  folder_id: string;
}

function MainFormMeta({ date, folder_name, folder_id }: MainFormMetaProps) {
  const { data }: FolderState = useSelector((state: any) => state.folders);

  return (
    <Box>
      <HStack gap={14} fontWeight={600} fontSize='13px' color='gray.500' mb={2} mt={6}>
        <HStack>
          <Box width='30px' textAlign='center'>
            <BsFillCalendar3WeekFill size={15} />
          </Box>
          <Box width='50px'>
            <Text>Date</Text>
          </Box>
        </HStack>
        <Text color='white'>{formatDate(date.substring(0, 10))}</Text>
      </HStack>
      <HorizontalLine />

      <HStack gap={14} fontWeight={600} fontSize='13px' color='gray.500' mb={2} mt={2}>
        <HStack>
          <Box width='30px' textAlign='center'>
            <BsFillFolderFill size={16} />
          </Box>
          <Box width='50px'>
            <Text>Folder</Text>
          </Box>
        </HStack>

        <Menu isLazy>
          <MenuButton fontSize='13px' fontWeight={600} color='white'>
            <HStack>
              <Text> {folder_name}</Text>
              <BsChevronDown />
            </HStack>
          </MenuButton>
          <MenuList zIndex={10} color='white'>
            {data &&
              data.map((folder: FolderInfo) => (
                <MenuItem key={folder._id}>{folder.name}</MenuItem>
              ))}
          </MenuList>
        </Menu>
      </HStack>
      <HorizontalLine />
    </Box>
  );
}

export default MainFormMeta;
