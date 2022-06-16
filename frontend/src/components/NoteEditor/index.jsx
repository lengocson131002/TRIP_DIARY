import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {
  EditorState,
  convertToRaw,
  ContentState,
} from "draft-js";

const NoteEditor = ({ html, setHtml }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  }, []);

  const onEditorStateChange = (state) => {
    setHtml(draftToHtml(convertToRaw(state.getCurrentContent())));
    setEditorState(state);
  };

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      toolbar={
        { options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'emoji', 'remove', 'history'] }
      }
    />
  );
}
export default NoteEditor;