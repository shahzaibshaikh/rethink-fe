import { Box, HStack, Text } from '@chakra-ui/react';
import { BsFillCalendar3WeekFill, BsFillFolderFill } from 'react-icons/bs';
import formatDate from '../utilities/dateFormatter';
import HorizontalLine from './HorizontalLine';

interface MainFormMetaProps {
  date: string;
  folder_name: string;
}

function MainFormMeta({ date, folder_name }: MainFormMetaProps) {
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
        <Text color='white'>{folder_name}</Text>
      </HStack>
      <HorizontalLine />
    </Box>
  );
}

export default MainFormMeta;
