import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Header from './components/Header'
import Loading from './components/Loading'
import SaveButton from './components/SaveButton'

import Main from './da-cms/src/main/Main'

// Theming
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import theme from './theme'
import pages from './pages/'

const selectedTab = 1

const styles = theme => (
  {
    app: {
      backgroundColor: theme.palette.background.default,
      height: '100vh'
    }
  }
)

const save = () => <div>save</div>

const App = (props) => {
  return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
        <div className={props.classes.app}>
          <Main saveButton={save} loading={Loading}>
            <Header pages={pages} selected={selectedTab}/>
              <Suspense fallback={<Loading/>}>
                <Switch>
                  <Route path="/" exact component={pages[selectedTab].render} />
                  {pages.map((page, index) => {
                    return <Route key={index} path={`/${page.id}`} component={page.render} />
                  })}
                </Switch>
              </Suspense>
              <SaveButton/>
            </Main>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)