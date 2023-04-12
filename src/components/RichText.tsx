import { Box, Button, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/slices/noteDetailSlice';
import { NoteStateOne } from '../interfaces/NoteInterface';

function RichText() {
  const { loading, data }: NoteStateOne = useSelector((state: any) => state.noteDetail);
  const dispatch = useDispatch();
  const defaultString =
    '<p><span style="color: rgb(137, 137, 137);">Write your thoughts here.</span></p>';
  return (
    <Box mt={6}>
      <Editor
        value={data?.content ?? ''}
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onEditorChange={event => {
          dispatch(setData({ ...data, content: event }));
        }}
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
    </Box>
  );
}

export default RichText;
