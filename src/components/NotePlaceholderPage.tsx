import { Box, Heading, HStack } from '@chakra-ui/react';
import { HiPencilSquare } from 'react-icons/hi2';

function NotePlaceholderPage() {
  return (
    <Box display='grid' placeItems='center' height='100%'>
      <HStack>
        <HiPencilSquare size={28} />
        <Heading fontSize='xl'> Write a note</Heading>
      </HStack>
    </Box>
  );
}

export default NotePlaceholderPage;
