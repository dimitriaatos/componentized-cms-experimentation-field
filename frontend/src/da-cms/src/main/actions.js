import server from './content'

export default ({state, dispatch}) => ({
  ...server,
  login: (cred) => {
    server.login(cred)
    .then(() => dispatch({type: 'login'}))
    // .catch(loginFailed())
  },
  logout: () => {
    server.logout()
    dispatch({type: 'logout'})
  },
  save: () => {
    Object.entries(state.components).forEach(save => save[1].current())
    return server.save(state.content)
  }
})