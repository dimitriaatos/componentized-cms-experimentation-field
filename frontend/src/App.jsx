import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Header from './components/Header'
import CircularProgress from '@material-ui/core/CircularProgress'

// Theming
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import theme from './theme'
import pages from './pages/'

const selectedTab = 1

const styles = theme => (
  {
    app: {
      backgroundColor: theme.palette.background.default,
      // backgroundColor: 'theme.palette.background.default',
    }
  }
)

const centeredProgress = (
  <div style = {
    {
      position: 'fixed',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <CircularProgress
      size={60}
      thickness={5}
    />
  </div>
)

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
      <div className={props.classes.app}>
        <Header pages={pages} selected={selectedTab}/>
        <Suspense fallback={centeredProgress}>
          <Route path="/" exact component={pages[selectedTab].render} />
          {pages.map((page, index) => {
            return <Route key={index} path={`/${page.id}`} component={page.render} />
          })}
        </Suspense>
      </div>
    </BrowserRouter>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)