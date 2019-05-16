import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'

import { server } from './../da-cms/src/index'
import Loading from './../components/Loading'

class Login extends Component {
  state = {
    open: false,
    cred: {},
    loading: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  submit = () => {
    this.setState({loading: true})
    server.login(this.state.cred).then(
      () => {
        this.setState({loading: false})
        this.handleClose()
      }
    )
  }

  updateInput({target}) {
    const cred = {}
    cred[target.id] = target.value
    this.setState({cred: Object.assign({}, this.state.cred, cred)})
  }

  pressEnter(event){
    if (event.keyCode == 13) this.submit()
  }
  
  render() {
    if (this.state.loading) {
      return <Loading/>
    } else {
      return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogContent>
            <TextField
              label="Username"
              id="username"
              // value={this.state.cred.username}
              onChange={event => this.updateInput(event)}
              onKeyDown={event => this.pressEnter(event)}
              autoFocus
              required
              fullWidth/>
            <TextField
              type="password"
              label="Password"
              id="password"
              // value={this.state.cred.password}
              onChange={event => this.updateInput(event)}
              onKeyDown={event => this.pressEnter(event)}
              autoComplete="current-password"
              required
              fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submit} color="primary">
              Log in
            </Button>
          </DialogActions>
        </Dialog>
      )
    }
  }
}

export default Login