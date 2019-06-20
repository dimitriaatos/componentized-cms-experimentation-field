import React, { useState, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ButtonBase from '@material-ui/core/ButtonBase'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
// import Fab from '@material-ui/core/Fab'
import Work from './Work'
import makeStyles from '@material-ui/styles/makeStyles'
import {parser, infoParser, makeTitle} from './../helper'
import { Context } from './../da-cms/src/main/Main'
import { editablePropsCreator } from '../helper';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1),
    width: '100%',
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
  remove: {
    position: 'absolute',
    right: 2,
    top: 2,
    zIndex: 1,
  },
  container: {
    position: 'relative',
  },
}))

const WorkPreview = props => {
  const [openState, setOpenState] = useState(props.content.path ? props.match.params.work == props.content.path : false),
    context = useContext(Context),
    open = state => () => {
      if (props.content.path) props.history.push(`/portfolio${state ? '/' + props.content.path : ''}`)
      setOpenState(state)
    },
    handleChange = data => {
      props.onChange(data, props.index)
    },
    classes = useStyles()

    const meta = (content, infoType) => {
      const model = {
        preview: {
          title: 0,
          by: parser.and,
          date: parser.date,
        },
        type: {
          type: 0,
        },
      }
      const editableProps = editablePropsCreator(handleChange)
    
      return infoParser(content, model[infoType], editableProps)
    }
  
  return (
    <div className={classes.container}>
      {
        context.state.editable ?
        <IconButton className={classes.remove} onClick={() => props.remove(props.index)} >
          <CloseIcon/>
        </IconButton> :
        null
      }
      <ButtonBase
        focusVisibleClassName={classes.buttonFocusVisible}
        classes={{root: classes.button}}
        type="button"
        onClick={open(true)}
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <table className={classes.table}>
              <tbody>
                {
                  Object.entries(meta(props.content, 'preview')).map(([key, value], index) => {
                    return (
                      <tr key={index}>
                        <td className={classes.leftColumn}>{makeTitle(key)}</td>
                        <td className={classes.rightColumn}>
                          {value}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className={classes.sideInfo} >
              {meta(props.content, 'type').type}
            </div>
          </CardContent>
        </Card>
      </ButtonBase>
      <Modal open={openState} onClose={open(false)}>
        <>
          <Work
            content={props.content}
            onChange={handleChange}
            close={open(false)}
            meta={{...meta(props.content, 'preview'), type: meta(props.content, 'type').type}}
          />
        </>
      </Modal>
    </div>
  )
}

WorkPreview.propTypes = {
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  index: PropTypes.number,
  remove: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
}

export default WorkPreview