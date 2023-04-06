import { Badge, Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface NoteCardProps {
  title: string;
  content: string;
  folder_name: string;
}

function NoteCard({ title, content, folder_name }: NoteCardProps) {
  return (
    <Card>
      <Heading>{title}</Heading>
      <Text>{content}</Text>
      <Badge>{folder_name}</Badge>
    </Card>
  );
}

export default NoteCard;
