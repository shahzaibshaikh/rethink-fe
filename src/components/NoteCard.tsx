import { Badge, Box, Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface NoteCardProps {
  title: string;
  content: string;
  folder_name: string;
}

function NoteCard({ title, content, folder_name }: NoteCardProps) {
  return (
    <Box mb={4}>
      <Heading fontSize='16px' noOfLines={1} overflowWrap='break-word' mb={1}>
        {title}
      </Heading>
      <Text color='gray.500' fontSize='xs' noOfLines={2} overflowWrap='break-word' mb={1}>
        {content}
      </Text>
      <Badge borderRadius={10} padding='2px 6px' fontSize={10}>
        {folder_name}
      </Badge>
    </Box>
  );
}

export default NoteCard;
