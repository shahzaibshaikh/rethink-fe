import { Box, Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function RichText() {
  const [formData, setFormData] = useState('Write your thoughts here.');
  const log = () => {
    console.log(formData);
  };
  return (
    <Box mt={6}>
      <Editor
        value={formData}
        apiKey='kryeq3b472lorx6bjwuoron2otj3s8ki1co9jprig0mqm1wh'
        onEditorChange={setFormData}
        init={{
          height: '480px',
          menubar: false,
          skin: 'dark-rethink',
          resize: false,
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
          colorScheme='red'
          variant='outline'
          _hover={{ bg: 'gray.700', color: 'gray.100' }}
        >
          Delete note
        </Button>
        <Button
          fontSize='sm'
          colorScheme='purple'
          variant='outline'
          _hover={{ bg: 'gray.700', color: 'gray.100' }}
        >
          Save note
        </Button>
      </HStack>
    </Box>
  );
}

export default RichText;
