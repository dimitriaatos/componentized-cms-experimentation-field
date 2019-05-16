import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<Login ref={(loginForm) => {window.loginForm = loginForm.handleOpen}} />, document.getElementById('login'))

import { Context } from './../da-cms/src/main/Main'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Switch from '@material-ui/core/Switch'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import Login from './Login'
// import {MultiClick} from './../helper'
// import { logout } from '../da-cms/src/main/content'

const Header = props => {
  // const fiveClicks = new MultiClick(loginSecret, {clicks: 4})
  const [tabs, setTabs] = useState({value: props.selected})
  const context = useContext(Context)

  // const loginSecret = () => {
  //   window.loginForm()
  // }

  const tabChange = (event, value) => {
    setTabs({value});
  }

  const handleEditable = ({target}) => {
    context.dispatch({type: 
      target.checked ? 'login' : 'logout'
    })
  }

  return (
    <AppBar position="sticky" color="primary">
      
      <Toolbar style={{justifyContent: 'center'}}>
      <Tabs
        value={tabs.value}
        onChange={tabChange}
        indicatorColor="secondary"
        centered
      >
        {props.pages.map(
          (page, index) => (
            <Tab
              key={index}
              value={index}
              label={page.name}
              component={Link}
              to={page.id}
            />
          )
        )}
      </Tabs>
      <Switch
        checked={context.state.editable}
        onChange={handleEditable}
      />
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    render: PropTypes.object
  })),
  selected: PropTypes.number
}

Header.defaultProps = {
  selected: 0
}

export default Header