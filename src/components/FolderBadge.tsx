import { Badge } from '@chakra-ui/react';

interface FolderBadgeProps {
  folder_name: string;
}

function FolderBadge({ folder_name }: FolderBadgeProps) {
  return (
    <Badge borderRadius={10} padding='2px 6px' fontSize={10}>
      {folder_name}
    </Badge>
  );
}

export default FolderBadge;