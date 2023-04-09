import { Box, Heading, HStack } from '@chakra-ui/react';
import { ImFileEmpty } from 'react-icons/im';

function NoteListingPlaceholder() {
  return (
    <Box display='grid' placeItems='center' height='100%'>
      <HStack>
        <ImFileEmpty size={24} />
        <Heading fontSize='xl'> No notes here</Heading>
      </HStack>
    </Box>
  );
}

export default NoteListingPlaceholder;
