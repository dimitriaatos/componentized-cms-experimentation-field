// import detailedDiff from 'deep-object-diff/dist/detailed'
import {useEffect, useRef, useState, useContext} from 'react'
import {server, Context} from './Main'

const isSingle = array => array.length == 1 ? true : false

/**
 * A custom hook for making editable CMS components
 */
  
const usePath = ({path}, stateInit) => {
  const [content, setContent] = useState(stateInit ? stateInit : []),
    [init, setInit] = useState([]),
    context = useContext(Context),
    sendRef = useRef(),
    contentRef = useRef(),
    initRef = useRef()

  const send = () => {
    context.dispatch({
      type: 'store',
      content: contentRef.current,
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
    setContent(data)
    setInit(data)
  }

  const handleArray = data => isSingle(data) ? data[0].content : {all: data, changed: [], removed: []}

  useEffect(() => {
    // send reference for content to context
    context.dispatch({type: 'subscribe', save: sendRef, path})
    // fetch content if not already loaded and send to context (global) and content (local)
    if (!context.state.content[path]) {
      server.get(path)
      .then(data => data.json())
      .then(data => {
        setStorage(handleArray(data))
      })
    } else {
      setStorage(context.state.content[path])
    }
    // send content to main when component is detached (route detaches components)
    return send
  }, [])
  return [content, setContent, init]
}

const useContent = (options, stateInit) => (
  options.path ?
  usePath(options, stateInit) :
  [...useState(options.content ? options.content : stateInit), stateInit]
)

export { useContent }