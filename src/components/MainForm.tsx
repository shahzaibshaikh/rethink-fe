import { Box, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MainFormMeta from './MainFormMeta';
import NoteOptionsIcon from './NoteOptionsIcon';
import '../styles/dark-rethink/skin.min.css';

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
            height: 500,
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
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code'
            ],
            toolbar:
              'bold italic underline | forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist | ',

            content_style: 'body { font-family:Inter,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}>Log editor content</button>
      </Box>
    </Box>
  );
}

export default MainForm;
