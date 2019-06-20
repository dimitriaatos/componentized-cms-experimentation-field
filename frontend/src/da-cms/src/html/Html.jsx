import React, { useContext, useRef } from 'react'
import { useContent, contentProps, Context } from './../main/Main'
import ReactHtmlParser from 'react-html-parser'
// import PropTypes from 'prop-types'

const Html = props => {
  const [content, setContent] = useContent({content: props.content}),
  handleChange = e => { setContent(e.target.value) },
  context = useContext(Context),
  copyButton = useRef(null),
  copy = (e) => {
    let range, selection
    if (document.body.createTextRange) {
      range = document.body.createTextRange()
      range.moveToElementText(copyButton.current)
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();       
      range = document.createRange()
      range.selectNodeContents(copyButton.current)
      selection.removeAllRanges()
      selection.addRange(range)
    }
    document.execCommand('copy')
    if (window.getSelection) {window.getSelection().removeAllRanges()}
    else if (document.selection) {document.selection.empty()}
  }
  return (
    <>
      {
        context.state.editable ?
        <div>
          <button onClick={copy}><span ref={copyButton} >style=&quot;position: absolute;top: 0;left: 0;width: 100%;height:100%;&quot;</span></button>
          <textarea style={{width: '100%', resize: 'vertical'}} onChange={handleChange} value={content} /> 
        </div>
        : null
      }
      {ReactHtmlParser(content)}
    </>
  )
}

Html.propTypes = {
  ...contentProps
}

export default Html