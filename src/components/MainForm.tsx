import { background, Box, HStack, Input, InputGroup } from '@chakra-ui/react';
import { useRef, useState } from 'react';
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
      <>
        <Editor
          value={formData}
          apiKey='kryeq3b472lorx6bjwuoron2otj3s8ki1co9jprig0mqm1wh'
          onChange={event => setFormData(event.target.value)}
          initialValue={formData}
          init={{
            height: 500,
            menubar: false,
            skin: 'oxide-dark',
            content_css: 'dark',
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
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
              'code',
              'help',
              'wordcount'
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Inter,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}>Log editor content</button>
      </>
    </Box>
  );
}

export default MainForm;
