import React, { useReducer } from 'react'
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
  
  switch (action.type) {
    case 'subscribe':
      return { ...state, components: {...state.components, [action.path]: action.save } }
    case 'login':
      return { ...state, editable: true }
    case 'logout':
      return { ...state, editable: false }
    case 'save':
      return { ...state, content: {...state.content, [action.path]: action.content} }
    default:
      return state
  }
}

let Loading

const Main = props => {
  Loading = props.loading
  const [state, dispatch] = useReducer(reducer, initialContext)

  return (
    <Context.Provider value={{state, dispatch}}>
      {props.children}
    </Context.Provider>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  saveButton: PropTypes.func.isRequired,
  loading: PropTypes.func,
  adapter: PropTypes.object,
}

export default Main
export { Main, Context, Loading, server, useContent, actions }