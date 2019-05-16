import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import {Editor, EditorState} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'
import {stateFromHTML} from 'draft-js-import-html'
// import MaterialRichEdit from './MaterialRichEdit'

const TextEditor = (props, ref) => {
  const [state, setState] = useState(EditorState.createWithContent(stateFromHTML(props.content)))
  useImperativeHandle(ref, () => ({ get: () => stateToHTML(state.getCurrentContent()) }))

  return (
    <>
      {/* <MaterialRichEdit/> */}
      <Editor
        editorState={state}
        onChange={setState}
      />
    </>
  )
}
const TextEditorRef = forwardRef(TextEditor)

TextEditorRef.propTypes = {
  content: PropTypes.string,
}

export default TextEditorRef