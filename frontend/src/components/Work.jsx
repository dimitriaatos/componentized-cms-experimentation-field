import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

import {parser, infoParser} from './../helper'

const rest = {
  abstract: parser.rich,
  links: parser.links,
  embed: parser.html,
  presentations: parser.presentations,
  technicalDetails: parser.rich,
  description: parser.rich,
}

const Work = props => {
  const info = infoParser(props.info, rest)

  return (
    <>
      <Typography variant="h3" style={{textAlign:'center'}}>
        {props.info.title}
      </Typography>
      {
        Object.keys(info).map((key, index) => (
          <p key={index} >
            {info[key]}
          </p>
        ))
      }
    </>

  )
}

Work.propTypes = {
  info: PropTypes.object
}

export default Work