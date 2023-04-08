import { Box, HStack, Input, InputGroup } from '@chakra-ui/react';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';
import RichText from './RichText';

function MainForm() {
  return (
    <Box mt={3}>
      <HStack width='100%' justifyContent='space-between' gap={2}>
        <form style={{ width: '100%' }}>
          <InputGroup>
            <Input
              placeholder='Title'
              border='none'
              background='gray.700'
              fontWeight={700}
            />
          </InputGroup>
        </form>
        <NoteOptionsIcon />
      </HStack>
      <MainFormMeta />
      <RichText />
    </Box>
  );
}

export default MainForm;
