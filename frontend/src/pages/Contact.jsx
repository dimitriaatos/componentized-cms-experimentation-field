import React from 'react'
import dtheme from './../theme'
import ButtonBase from '@material-ui/core/ButtonBase'
import makeStyles from '@material-ui/styles/makeStyles'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faFacebook,
    faTwitter,
    faFacebookMessenger,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => (
    {
        main: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'inherit',
        },
        contactContainer: {
            marginTop: theme.spacing(2),
            backgroundColor: theme.palette.secondary,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        button: {
            margin: theme.spacing(1),
            color: theme.palette.secondary.dark,
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
        buttonFocusVisible: {
            color: theme.palette.secondary.main,
        },
    }
))

const icons = [  

]

// eslint-disable-next-line no-useless-escape
const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

// const getLink = 

const Contact = props => {
    const classes = useStyles()
    return (
        <main className={classes.main} >
            <div className={classes.contactContainer}>
                {icons.map((icon, index) => 
                    (
                        <ButtonBase
                            disableRipple={true}
                            key={index}
                            classes={{
                                root: classes.button,
                                focusVisible: classes.buttonFocusVisible,
                            }}
                            href={icon.link}
                            // onClick={getLink}
                            target={url.test(icon.link) ? '_blank' : ''}
                        >
                            <FontAwesomeIcon icon={icon.icon} size={dtheme.iconSize} />
                        </ButtonBase>
                    )
                )}
            </div>
        </main>
    )
}

Contact.propTypes = {
    icons: PropTypes.array,
}

export default Contact