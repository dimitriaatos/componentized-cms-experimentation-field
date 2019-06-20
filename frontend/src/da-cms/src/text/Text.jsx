import React, {Suspense, lazy, useContext} from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import 'draft-js/dist/Draft.css'

import {Context, Loading, useContent, contentProps} from '../main/Main'
import { makeStyles } from '@material-ui/styles'

const TextEditor = lazy(() => import('./TextEditor'))

const useStyles = makeStyles(theme => ({
  'public-DraftEditorPlaceholder-root': {
    color: theme.palette.common.black ,
    // margin: '0 -15px -15px',
  },
}))

const Text = props => {
  const context = useContext(Context),
  [content, setContent, init] = useContent(props, ''),
  // [content, setContent, init] = useState(props.content),
  classes = useStyles(),
  handleChange = data => {
    setContent(data)
    if (props.onChange) props.onChange(data)
  }
  
  return (
    <Suspense fallback={props.loading ? <props.loading/> : Loading ? <Loading/> : null } >
    {
      context.state.editable ?
      <div className={classes['public-DraftEditorPlaceholder-root']}>
        <TextEditor
          placeholder={props.placeholder}
          path={props.path}
          content={content}
          init={init}
          onChange={handleChange}
          className={classes}
          plain={props.plain}
        />
      </div> :
      ReactHtmlParser(content)
    }
  </Suspense>
  )
}

Text.propTypes = {
  loading: PropTypes.element,
  placeholder: PropTypes.string,
  plain: PropTypes.bool,
  ...contentProps,
}

export default Text