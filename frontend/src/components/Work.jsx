import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const Work = (props) => {
  return (
    <Typography variant="h3" style={{textAlign:'center'}}>
      {props.work.title}
    </Typography>
  )
}

Work.propTypes = {
  work: PropTypes.object
}

export default Work