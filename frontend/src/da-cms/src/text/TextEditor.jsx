import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {Editor, EditorState} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'
import {stateFromHTML} from 'draft-js-import-html'
// import MaterialRichEdit from './MaterialRichEdit'

const TextEditor = (props) => {
  const [state, setState] = useState(EditorState.createWithContent(stateFromHTML(props.init || props.content)))
  const handleChange = data => {
    setState(data)
    props.onChange( !props.plain ? stateToHTML(state.getCurrentContent()) : state.getCurrentContent().getPlainText())
  }

  useEffect(() => {
    if (props.init) setState(EditorState.createWithContent(stateFromHTML(props.init)))
  }, [props.init])

  return (
    <>
      {/* <MaterialRichEdit/> */}
      <Editor
        editorState={state}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
    </>
  )
}

TextEditor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
  path: PropTypes.string,
  placeholder: PropTypes.string,
  init: PropTypes.string,
  plain: PropTypes.bool,
}

// TextEditor.defaultProps = {
//   plain: false,
// };

export default TextEditor