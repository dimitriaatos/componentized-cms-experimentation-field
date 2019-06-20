import React from 'react'
// import PropTypes from 'prop-types'
import makeStyles from '@material-ui/styles/makeStyles'
import { Text } from './../da-cms/src/index'

// import Loading from './../components/Loading'

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: theme.breakpoints.values.sm,
        margin: 'auto',
    }
}))

const About = props => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <Text path="personal/about" placeholder="about" />
        </div>
    )
}

About.propTypes = {
}

export default About