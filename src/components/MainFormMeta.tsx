import { Box, HStack, Text } from '@chakra-ui/react';
import { BsFillCalendar3WeekFill, BsFillFolderFill } from 'react-icons/bs';
import HorizontalLine from './HorizontalLine';

function MainFormMeta() {
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
        <Text color='white'>21/06/2022</Text>
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
        <Text color='white'>Memories</Text>
      </HStack>
      <HorizontalLine />
    </Box>
  );
}

export default MainFormMeta;
