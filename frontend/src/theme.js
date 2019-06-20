import { createMuiTheme } from '@material-ui/core/styles'

// Colors
import grey from '@material-ui/core/colors/grey'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
    error: orange,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: 'white',
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 15,
  },
  iconSize: '6x',
})

export default theme