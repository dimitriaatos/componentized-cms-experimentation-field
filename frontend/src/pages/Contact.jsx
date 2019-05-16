import React from 'react'
import dtheme from './../theme'
import ButtonBase from '@material-ui/core/ButtonBase'
import { withStyles } from '@material-ui/core';
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

const styles = theme => (
    {
        main: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'inherit',
        },
        contactContainer: {
            marginTop: theme.spacing.unit * 4,
            backgroundColor: theme.palette.primary,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        button: {
            margin: theme.spacing.unit,
            color: theme.palette.primary.main,
            '&:hover': {
                color: theme.palette.primary.dark,
            },
        },
        buttonFocusVisible: {
            color: theme.palette.primary.dark,
        },
    }
)

const icons = [  
    {icon: faGithub, link: 'https://github.com/dimitriaatos/'},
    {icon: faFacebook, link: 'https://www.facebook.com/dimitris.aatos'},
    {icon: faTwitter, link: 'https://twitter.com/DimitriAatos'},
    {icon: faFacebookMessenger, link: 'https://www.messenger.com/t/dimitris.aatos'},
    {icon: faInstagram, link: 'https://www.instagram.com/dimitriaatos/'},
    {icon: faLinkedin, link: 'https://www.linkedin.com/in/dimitri-aatos-ellinas-183842137/'},
]

// eslint-disable-next-line no-useless-escape
const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

const Contact = (props) => {
    const {classes} = props
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
    classes: PropTypes.object,
    icons: PropTypes.array,
}

export default withStyles(styles)(Contact)