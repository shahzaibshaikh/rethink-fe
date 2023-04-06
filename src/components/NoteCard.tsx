import { Badge, Box, Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import HorizontalLine from './HorizontalLine';

interface NoteCardProps {
  title: string;
  content: string;
  folder_name: string;
}

function NoteCard({ title, content, folder_name }: NoteCardProps) {
  return (
    <>
      <Box padding={2} mb={2} mt={2} borderRadius={6} _hover={{ background: 'gray.600' }}>
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
          {content}
        </Text>
        <Badge borderRadius={10} padding='2px 6px' fontSize={10}>
          {folder_name}
        </Badge>
      </Box>
      <HorizontalLine />
    </>
  );
}

export default NoteCard;
