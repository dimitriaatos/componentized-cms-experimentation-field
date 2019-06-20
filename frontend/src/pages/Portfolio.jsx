import React from 'react'
import PropTypes from 'prop-types'
import List from './../da-cms/src/list/List'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import makeStyles from '@material-ui/styles/makeStyles'

import WorkPreview from './../components/WorkPreview'

const add = props => (
    <Fab color="primary" aria-label="Add" onClick={props.onClick} >
        <AddIcon/>
    </Fab>
)
const useStyles = makeStyles(theme => ({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: theme.breakpoints.values.sm,
        padding: 0,
        margin: 0,
        position: 'relative',
        display: 'block',
      },
      margins: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        padding: theme.spacing(1),
        boxSizing: 'border-box',
        justifyContent: 'center',
      }
}))

const Portfolio = props => {
    const classes = useStyles()
    return (
    <div className={classes.container}>
        <div className={classes.margins} >
            <List component={p => <WorkPreview {...p} {...props} />} path="portfolio" add={add} />
        </div>
    </div>
    )
}

Portfolio.propTypes = {
    params: PropTypes.object,
    // match: PropTypes.object,
}

export default Portfolio