import { Box, Heading, HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function NoteCardSkeleton() {
  return (
    <>
      <Box padding={2} mb={2} mt={2} borderRadius={8}>
        <SkeletonText fontSize='13px' noOfLines={1} overflowWrap='break-word' mb={1} />

        <SkeletonText fontSize='xs' noOfLines={2} overflowWrap='break-word' mb={1} />

        <HStack justifyContent='space-between' alignItems='center'>
          <SkeletonCircle />
          <SkeletonCircle />
        </HStack>
      </Box>
    </>
  );
}

export default NoteCardSkeleton;
