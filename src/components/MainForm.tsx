import { Box, Button, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';

function MainForm() {
  const [formData, setFormData] = useState(
    '<p>This is the initial content of asdasdr.</p>'
  );
  const log = () => {
    console.log(formData);
  };

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
      <Box mt={6}>
        <Editor
          value={formData}
          apiKey='kryeq3b472lorx6bjwuoron2otj3s8ki1co9jprig0mqm1wh'
          onEditorChange={setFormData}
          init={{
            height: '460px',
            menubar: false,
            skin: 'dark-rethink',
            content_css: '/tinymce.css',
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'codesample',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'formats'
            ],
            toolbar:
              'blocks | bold | italic | underline  | forecolor | alignleft | aligncenter ' +
              'alignright | alignjustify | bullist | numlist | blockquote | hr ',

            content_style:
              'body { font-family:Inter,sans-serif; font-size:10px, line-height:1 }'
          }}
        />
        <HStack justifyContent='space-between' alignItems='center' mt={3}>
          <Button
            fontSize='sm'
            borderRadius={20}
            colorScheme='red'
            variant='outline'
            _hover={{ bg: 'gray.700', color: 'gray.100' }}
          >
            Delete note
          </Button>
          <Button
            fontSize='sm'
            borderRadius={20}
            colorScheme='purple'
            variant='outline'
            _hover={{ bg: 'gray.700', color: 'gray.100' }}
          >
            Save note
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default MainForm;
