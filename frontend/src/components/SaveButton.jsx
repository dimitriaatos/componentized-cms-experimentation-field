import React, { useContext } from 'react'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/styles'
// import PropTypes from 'prop-types'
import { Context } from './../da-cms/src/main/Main'
import useActions from '../da-cms/src/main/actions'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: 'fixed',
    bottom: '50px',
    right: '50px',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const SaveButton = props => {
  const context = useContext(Context),
  classes = useStyles(),
  state = context.state,
  dispatch = context.dispatch,
  {save} = useActions({state, dispatch})
  return (
    <>
      {context.state.editable ?
        <Fab
          variant="extended"
          aria-label="Save"
          className={classes.fab}
          color='primary'
          onClick={save}
        >
          Save
        </Fab> :
        null
      }
    </>
  )
}

// SaveButton.propTypes = {
//   classes: PropTypes.object,
// }

export default SaveButton