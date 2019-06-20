import React, { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import server from './content'
import { useContent } from './useContent'
import actions from './actions'

// initializing Context for autocompletion
const initialContext = {
  editable: false,
  content: {},
  components: []
}

const Context = React.createContext({state: initialContext})

const reducer = (state, action) => {
  // action.type == 'store' ? console.log(action.content) : null
  switch (action.type) {
    case 'subscribe':
      return { ...state, components: {...state.components, [action.path]: action.save } }
    case 'login':
      return { ...state, editable: true }
    case 'logout':
      return { ...state, editable: false }
    case 'store':
      return { ...state, content: {...state.content, [action.path]: action.content} }
    default:
      return state
  }
}

let Loading

const Main = props => {
  Loading = props.loading
  const [state, dispatch] = useReducer(reducer, initialContext)
  window.con = useContext(Context)

  return (
    <Context.Provider value={{state, dispatch}}>
      {props.children}
    </Context.Provider>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.func,
  adapter: PropTypes.object,
}

const contentProps = {
  path: PropTypes.string,
  content: PropTypes.any,
  onChange: PropTypes.func,
}

export default Main
export { Main, Context, Loading, server, useContent, actions, contentProps }