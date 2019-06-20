import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'

const Tags = props => {
  const [list, setList] = useState(props.list)

  const handleDelete = index => () => {
    list.splice(index, 1)
    setList(list)
  }

  return (
    <>
      {list.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={handleDelete(index)}
          />
        ))}
    </>
  )
}

Tags.propTypes = {
  list: PropTypes.array
}

export default Tags