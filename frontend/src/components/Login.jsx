import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'

import { server } from './../da-cms/src/index'
import Loading from './../components/Loading'

const Login = props => {
  const [state, setState] = useState({
    open: false,
    cred: {},
    loading: false,
  }),

  handleOpen = () => {
    setState({ open: true })
  },

  handleClose = () => {
    setState({ open: false })
  },

  submit = () => {
    setState({loading: true})
    server.login(state.cred).then(
      () => {
        setState({loading: false})
        handleClose()
      }
    )
  },

  updateInput = ({target}) => {
    const cred = {}
    cred[target.id] = target.value
    setState({cred: Object.assign({}, state.cred, cred)})
  },

  pressEnter = (event) => {
    if (event.keyCode == 13) submit()
  }
  
  if (state.loading) {
    return <Loading/>
  } else {
    return (
      <Dialog
        open={state.open}
        onClose={handleClose}
      >
        <DialogContent>
          <TextField
            label="Username"
            id="username"
            // value={state.cred.username}
            onChange={updateInput}
            onKeyDown={pressEnter}
            autoFocus
            required
            fullWidth/>
          <TextField
            type="password"
            label="Password"
            id="password"
            // value={state.cred.password}
            onChange={updateInput}
            onKeyDown={pressEnter}
            autoComplete="current-password"
            required
            fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={submit} color="primary">
            Log in
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default Login