import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Text } from './../da-cms/src/index'

// import Loading from './../components/Loading'

const styles = theme => ({
    container: {
        maxWidth: theme.breakpoints.values.sm,
        margin: 'auto',
    }
})

const About = (props) => (
    <div className={props.classes.container} >
        <h1>About</h1>
        <Text path="personal/about" />
    </div>
)

About.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)