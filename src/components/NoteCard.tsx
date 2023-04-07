import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import formatDate from '../utilities/dateFormatter';
import FolderBadge from './FolderBadge';

interface NoteCardProps {
  title: string;
  content: string;
  folder_name: string;
  updated_at: string;
}

function NoteCard({ title, content, updated_at, folder_name }: NoteCardProps) {
  return (
    <>
      <Box
        padding={2}
        mb={2}
        mt={2}
        borderRadius={8}
        _hover={{ background: 'gray.600', transition: '300ms' }}
      >
        <Heading
          color='white'
          fontSize='14px'
          noOfLines={1}
          overflowWrap='break-word'
          mb={1}
        >
          {title}
        </Heading>
        <Text
          color='gray.500'
          fontSize='xs'
          noOfLines={2}
          overflowWrap='break-word'
          mb={1}
        >
          {formatDate(updated_at.substring(0, 10))} {'  '} &#8226; {'  '} {content}
        </Text>

        <FolderBadge folder_name={folder_name} />
      </Box>
    </>
  );
}

export default NoteCard;
