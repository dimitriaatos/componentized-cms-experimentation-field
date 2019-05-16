import React, { useContext } from 'react'
import Fab from '@material-ui/core/Fab'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import { Context } from './../da-cms/src/main/Main'


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '50px',
    right: '50px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const SaveButton = props => {
  const context = useContext(Context)
  return (
    <>
      {context.state.editable ?
        <Fab
          variant="extended"
          aria-label="Save"
          className={props.classes.fab}
          color='primary'
        >
          Save
        </Fab> :
        null
      }
    </>
  )
}

SaveButton.propTypes = {
  classes: PropTypes.object,
}


export default withStyles(styles)(SaveButton)