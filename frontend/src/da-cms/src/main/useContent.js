import detailedDiff from 'deep-object-diff/dist/detailed'
import {useEffect, useRef, useState, useContext} from 'react'
import {server, Context} from './Main'

/**
 * A custom hook for making editable CMS components
 * @param {String} path The path for component's content
 * @param {function} get A callback to execute before saving the content (optional)
 * @return {Array} [content, setContent]
 */
  
const useContent = (path, get) => {
  const [content, setContent] = useState([])
  const [init, setInit] = useState([])
  const context = useContext(Context)
  const sendRef = useRef()
  const contentRef = useRef()
  const initRef = useRef()

  const send = () => {
    if (get) setContent(get())
    context.dispatch({
      type: 'save',
      content: init.map(document => ({
        ...document,
        content: detailedDiff(initRef.current.content, contentRef.current)
      })),
      path
    })
  }

  // update ref to content every time it changes
  useEffect(() => {
    sendRef.current = send
    initRef.current = init
    contentRef.current = content
  }, [content, init])

  const setStorage = data => {
    setContent(data.length == 1 ? data[0].content : data)
    setInit(data)
  }

  useEffect(() => {
    // send reference for content to context
    context.dispatch({type: 'subscribe', save: sendRef, path})
    // fetch content if not already loaded and send to context (global) and content (local)
    if (!context.state.content[path]) {
      server.get(path)
      .then(data => {return data.json()})
      .then(setStorage)
    } else {
      setStorage(context.state.content[path])
    }
    // send content to main when component is detached (route detaches components)
    return send
  }, [])

  return [content, setContent]
}

export { useContent }