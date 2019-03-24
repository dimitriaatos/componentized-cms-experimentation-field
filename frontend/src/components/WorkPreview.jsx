import React, {Fragment} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ButtonBase from '@material-ui/core/ButtonBase'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
// import TextEditable from './TextEditable'
import Work from './Work'

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.fontSize,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[5],
      transition: theme.transitions.create('boxShadow', {
        duration: theme.transitions.duration.short,
      }),
    },
    backgroundColor: theme.palette.background.paper,
  },
  buttonFocusVisible: {
    boxShadow: theme.shadows[5],
    transition: theme.transitions.create('boxShadow', {
      duration: theme.transitions.duration.short,
    }),
    backgroundColor: 'inherit',
  },
  card: {
    width: 'inherit',
    backgroundColor: 'inherit',
  },
  table: {
    textAlign: 'left',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.fontSize,
  },
  leftColumn: {
    fontVariant: 'small-caps',
    textAlign: 'right',
    paddingRight: theme.typography.fontSize,
    fontSize: theme.typography.fontSize - 3,
  },
  rightColumn: {
  },
  sideInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '10%',
    bottom: '10%',
    left: '10%',
    right: '10%',
  },
})

class WorkPreview extends React.Component {
  state = {open: false}

  makeTitle = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {type, ...infoList} = this.props.info
    const {classes} = this.props

    return (
      <Fragment>
        <ButtonBase focusVisibleClassName={classes.buttonFocusVisible} classes={{root: classes.button}} type="button" onClick={this.handleOpen}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <table className={classes.table}>
                <tbody>
                  {
                    Object.keys(infoList).map((key, index) => {
                      return (
                        <tr key={index}>
                          <td className={classes.leftColumn}>{this.makeTitle(key)}</td>
                          <td className={classes.rightColumn}>{infoList[key]}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className={classes.sideInfo}>{type}</div>
            </CardContent>
          </Card>
        </ButtonBase>
        <Modal  open={this.state.open} onClose={this.handleClose}>
        <div className={classes.modal}>
          {/* <TextEditable></TextEditable> */}
          <Work work={infoList} />
        </div>
        </Modal>
      </Fragment>
    )
  }
}

WorkPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired
}



export default withStyles(styles)(WorkPreview)

