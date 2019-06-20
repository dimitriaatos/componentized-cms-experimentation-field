import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<Login ref={(loginForm) => {window.loginForm = loginForm.handleOpen}} />, document.getElementById('login'))

import { Context } from './../da-cms/src/main/Main'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Switch from '@material-ui/core/Switch'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/styles/makeStyles'

import Login from './Login'
import Typography from '@material-ui/core/Typography'
// import {MultiClick} from './../helper'
// import { logout } from '../da-cms/src/main/content'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  image: {
    width: '72px',
    height: '72px',
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.default,
  },
}))

const Header = props => {
  // const fiveClicks = new MultiClick(loginSecret, {clicks: 4})
  const [tabs, setTabs] = useState(props.selected)
  const context = useContext(Context)
  const classes = useStyles()

  // const loginSecret = () => {
  //   window.loginForm()
  // }

  const tabChange = (event, value) => {
    setTabs(value)
  }

  const handleEditable = ({target}) => {
    context.dispatch({type: 
      target.checked ? 'login' : 'logout'
    })
  }

  return (
    <>
    <header className={classes.header} >
      <img className={classes.image} src="images/manifest/icon-72x72.png" alt="Dimitri Aatos Ellinas" />
      <Typography component="h2" >Dimitri Aatos Ellinas</Typography>
      <Switch
        checked={context.state.editable}
        onChange={handleEditable}
      />
    </header>
    <nav className={classes.nav}>
      <Tabs
        value={tabs}
        onChange={tabChange}
        indicatorColor="primary"
        centered
      >
        {props.pages.map(
          (page, index) => (
            <Tab
              disableRipple={true}
              key={index}
              value={index}
              label={page.name}
              component={Link}
              to={page.path}
            />
          )
        )}
      </Tabs>
    </nav>
    </>
  )
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    render: PropTypes.object
  })),
  selected: PropTypes.number
}

Header.defaultProps = {
  selected: 0
}

export default Header