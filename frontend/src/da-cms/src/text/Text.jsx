import React, {Suspense, lazy, useContext, useRef} from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

import {Context, Loading, useContent} from '../main/Main'

const TextEditor = lazy(() => import('./TextEditor'))

const Text = props => {
  const editor = useRef({})
  const context = useContext(Context)
  const [content, setContent] = useContent(props.path, editor.current.get)
  return (
    <Suspense fallback={props.loading ? <props.loading/> : Loading ? <Loading/> : null } >
    {
      context.state.editable ?
      <TextEditor ref={editor} content={content} onChange={setContent} /> :
      ReactHtmlParser(content)
    }
  </Suspense>
  )
}

Text.propTypes = {
  path: PropTypes.string,
  content: PropTypes.string,
  loading: PropTypes.func,
}

export default Text