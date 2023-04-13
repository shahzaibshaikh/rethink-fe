import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown, BsFillCalendar3WeekFill, BsFillFolderFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { FolderInfo, FolderState } from '../interfaces/FolderInterfaces';
import { NoteState, NoteStateOne } from '../interfaces/NoteInterface';
import { setData } from '../store/slices/noteDetailSlice';
import formatDate from '../utilities/dateFormatter';
import HorizontalLine from './HorizontalLine';

interface MainFormMetaProps {
  date: string;
  folder_name: string;
  folder_id: string;
}

function MainFormMeta({ date, folder_name, folder_id }: MainFormMetaProps) {
  const [selectedFolder, setSelectedFolder] = useState<FolderInfo>({
    _id: folder_id,
    name: folder_name
  });
  const dispatch = useDispatch();
  const { data }: FolderState = useSelector((state: any) => state.folders);
  const { data: noteDetail }: NoteStateOne = useSelector(
    (state: any) => state.noteDetail
  );

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
              <Text> {selectedFolder?.name}</Text>
              <BsChevronDown />
            </HStack>
          </MenuButton>
          {data && (
            <MenuList zIndex={10} color='white'>
              {data &&
                noteDetail &&
                data.map((folder: FolderInfo) => (
                  <MenuItem
                    onClick={() => {
                      setSelectedFolder(folder);
                      dispatch(
                        setData({
                          ...noteDetail,
                          folder: { ...noteDetail.folder, folder_id: folder._id }
                        })
                      );
                    }}
                    key={folder._id}
                  >
                    {folder.name}
                  </MenuItem>
                ))}
            </MenuList>
          )}
        </Menu>
      </HStack>
      <HorizontalLine />
    </Box>
  );
}

export default MainFormMeta;
