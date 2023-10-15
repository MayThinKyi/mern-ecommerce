import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({editorRef,value}) {
  
  
  return (
    <>
      <Editor initialValue={value}
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:"Work Sans",Arial,sans-serif; font-size:14px }',
          
        }}
      />
    </>
  );
}