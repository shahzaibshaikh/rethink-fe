import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import formatDate from '../utilities/dateFormatter';
import FolderBadge from './FolderBadge';

interface NoteCardProps {
  title: string;
  content: string;
  folder_name: string;
  updated_at: string;
  is_favorite: boolean;
}

function NoteCard({
  title,
  content,
  updated_at,
  folder_name,
  is_favorite
}: NoteCardProps) {
  const parser = new DOMParser();
  return (
    <>
      <Box
        padding={2}
        mb={2}
        mt={2}
        cursor='pointer'
        borderRadius={8}
        _hover={{ background: 'gray.600', transition: '300ms' }}
      >
        <Heading
          color='white'
          fontSize='13px'
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
          {formatDate(updated_at.substring(0, 10))} {'  '} &#8226; {'  '}{' '}
          {parser.parseFromString(content, 'text/html').documentElement.textContent}
        </Text>

        <HStack justifyContent='space-between' alignItems='center'>
          <FolderBadge folder_name={folder_name} />
          {!is_favorite ? <BsStar size={14} /> : <BsStarFill size={14} color='#6B46C1' />}
        </HStack>
      </Box>
    </>
  );
}

export default NoteCard;
