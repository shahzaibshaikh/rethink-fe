import { Box, Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface RichTextProps {
  content?: string;
}

function RichText({ content }: RichTextProps) {
  const [formData, setFormData] = useState<string>();

  return (
    <Box mt={6}>
      <Editor
        initialValue={content ? content : 'Write your thoughts here.'}
        value={formData}
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
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
            'table'
          ],
          toolbar:
            'blocks | bold | italic | underline  | forecolor | alignleft | aligncenter ' +
            'alignright | alignjustify | bullist | numlist | blockquote | hr ',

          content_style:
            'body { font-family:Inter,sans-serif; font-size:10px, line-height:1 }'
        }}
      />
      <HStack justifyContent='space-between' alignItems='center' mt={3}>
        <Button fontSize='sm' colorScheme='red' variant='outline'>
          Delete note
        </Button>
        <Button
          fontSize='sm'
          color='white'
          variant='solid'
          bg='purple.600'
          _hover={{ bg: 'gray.700', color: 'gray.100' }}
        >
          Save note
        </Button>
      </HStack>
    </Box>
  );
}

export default RichText;
