import {
  Box,
  HStack,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { BsStar, BsThreeDots } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';

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
    </Box>
  );
}

export default MainForm;
