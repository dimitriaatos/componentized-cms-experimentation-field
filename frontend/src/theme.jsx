import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
// Colors
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey'
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontSize: 15,
  },
  iconSize: '6x',
})
