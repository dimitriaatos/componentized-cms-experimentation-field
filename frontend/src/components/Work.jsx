import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { contentProps } from './../da-cms/src/main/Main'

import {parser, infoParser} from './../helper'
import makeStyles from '@material-ui/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CloseIcon from '@material-ui/icons/Close'
import Text from './../da-cms/src/text/Text'
import { editablePropsCreator } from '../helper';

const useStyles = makeStyles(theme => ({
  center: {textAlign:'center'},
  italic: {fontStyle: 'italic'},
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  metaText: {
    textAlign: 'center',
  },
  padding: {
    paddingBottom: theme.spacing(2),
  },
  modalContainer: {
    maxWidth: theme.breakpoints.values.md,
    height: '100vh',
    overflow: 'auto',
    margin: '0 auto 0 auto',
    outline: 'none',
    scrollSnapType: 'mandatory',
    position: 'relative',
    // border: '2px red solid',
  },
  pageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // border: '2px green solid',
  },
  article: {
    padding: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
  },
  page: {
    // overscrollBehavior: 'contain',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    margin: 0,
    minHeight: '100%',
    outline: 'none',
    scrollSnapAlign: 'start',
  },
  close: {
    position: 'sticky',
    float: 'right',
    zIndex: 1,
    right: 2,
    top: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
}))

const rest = {
  abstract: parser.text,
  links: parser.links,
  embed: parser.html,
  presentations: parser.presentations,
  technicalDetails: parser.text,
  description: parser.text,
}


const Work = props => {
  const editableProps = editablePropsCreator(props.onChange)
  const info = infoParser(props.content, rest, editableProps),
  classes = useStyles()
  
  const madeWith = infoParser(props.content, {madeWith: parser.array}, editableProps).madeWith
  const {type, title, ...previewInfo} = props.meta
  return (
    <div className={classes.modalContainer}>
      <IconButton className={classes.close} onClick={props.close} ><CloseIcon/></IconButton>
      <div className={classes.pageContainer}>
        <Card className={classes.page} >
          <CardContent className={classes.article} >
            <Typography variant="h4" className={classes.center}>
              <Text plain {...editableProps({title})} />
            </Typography>
            <Typography variant="h6" className={`${classes.center} ${classes.italic}`} >
              <Text plain {...editableProps({type})} />
            </Typography>
            <div className={classes.meta} >
              {
                Object.keys(previewInfo).map((key, index) => (
                  <div key={index} className={classes.metaText} >{previewInfo[key]}</div>
                ))
              }
            </div>
            <hr/>
            {
              Object.keys(info).map((key, index) => (
                <div key={index} className={classes.padding} >
                  {info[key]}
                </div>
              ))
            }
            <Typography className={classes.center} >Made with</Typography>
            {madeWith}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

Work.propTypes = {
  ...contentProps,
  index: PropTypes.number,
  close: PropTypes.func,
  meta: PropTypes.object,
}

export default Work