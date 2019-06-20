import React from 'react'
import Chip from '@material-ui/core/Chip'
import { contentProps, useContent } from './../main/Main'
import PropTypes from 'prop-types'

const classes = ({
  chip: {
    margin: '5px',
  },
  ul: {
    justifyContent: 'center',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: 'none',
    padding: 0,
    backgroundColor: 'inherit',
    margin: 0,
  },
})

const Array = props => {
  const [content, setContent] = useContent(props, [])
  const add = chip => setContent(content => {content.push(chip); return content}),
  remove = (chip, index) => setContent(content => {content.splice(index, 1); return content})
  return (
    <ul style={classes.ul}>
      {
        content.map((item, index) => (
          <li key={index} style={classes.li}>
            <Chip
              label={item}
              style={classes.chip}
            />
          </li>
        ))
      }
    </ul>
  )
}

Array.propTypes = {
  ...contentProps,
  placeholder: PropTypes.string,
}

export default Array