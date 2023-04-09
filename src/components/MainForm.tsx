import { Box, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NoteStateOne } from '../interfaces/NoteInterface';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';
import RichText from './RichText';

function MainForm() {
  const { loading, data }: NoteStateOne = useSelector((state: any) => state.noteDetail);
  const now = new Date();
  return (
    <Box mt={3}>
      <HStack width='100%' justifyContent='space-between' gap={2}>
        <form style={{ width: '100%' }}>
          <InputGroup>
            <Input
              defaultValue={data?.title ? data.title : ''}
              placeholder='Title'
              border='none'
              background='gray.700'
              fontWeight={700}
            />
          </InputGroup>
        </form>
        <NoteOptionsIcon />
      </HStack>
      <MainFormMeta
        folder_name={data?.folder?.name ?? 'All notes'}
        date={data?.updated_at ?? now.toString()}
      />
      <RichText content={data?.content ?? ''} />
    </Box>
  );
}

export default MainForm;
