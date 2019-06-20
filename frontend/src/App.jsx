import React, { Suspense, useState, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'

// Components
import Header from './components/Header'
import Loading from './components/Loading'
const SaveButton = lazy(() => import('./components/SaveButton'))

import Main from './da-cms/src/main/Main'

// Service Worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js')
//   .then(registration => {
//     // Successful registration
//     console.log('Hooray. Registration successful, scope is:', registration.scope)
//   }).catch(err => {
//     // Failed registration, service worker won’t be installed
//     console.log('Whoops. Service worker registration failed, error:', err)
//   })
//  }

// Theming
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import makeStyles from '@material-ui/styles/makeStyles'
import theme from './theme'
import {pages, routes} from './pages/'
import Metadata from './components/Metadata'
window.theme = theme

const homePage = 1

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '100vw',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
    },
    a: {
      color: theme.palette.primary.main,
    },
  },
  app: {
    // backgroundColor: theme.palette.background.default,
    poision: 'absolute',
    top: 0,
    bottom: 0, 
    left: 0,
    right: 0,
  }
})

const App = props => {
  const classes = useStyles()
  const [selected, setSelected] = useState(homePage)
  return (
    <ThemeProvider theme={theme}>
      <Metadata/>
      <BrowserRouter>
        <div className={classes.app}>
          <Main loading={Loading}>
            <Header pages={pages} selected={selected}/>
              <Suspense fallback={<Loading/>}>
                <Switch>
                  <Route path="/" exact component={routes[homePage].render} />
                  {routes.map((route, index) => {
                    return <Route key={index} path={`/${route.path}`} exact={route.exact} component={route.render} />
                  })}
                </Switch>
              </Suspense>
              <Suspense fallback={<Loading/>}><SaveButton/></Suspense>
            </Main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

App.propTypes = {
}

export default App