import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {Context, useContent, contentProps} from './../main/Main'
// import UrlSafeString from 'url-safe-string'

const styles = {
  ul: {
    listStyleType: 'none',
    padding: '0',
    backgroundColor: 'inherit',
    margin: 0,
  },
}

const List = props => {
  const context = useContext(Context)
  const [content, setContent] = useContent(props, {removed: [], changed: [], all: []})

  const add = () => {
    setContent(content => ({...content, all: [{}, ...content.all]}))
  },
  remove = index => {
    setContent(content => {
      const [{_id}] = content.all.splice(index, 1)
      content.removed.push(_id)
      return {...content}
    })
  },
  change = (data, index) => {
    setContent(content => {
      const [key, value] = Object.entries(data)[0]
      content.all[index][key] = value
      content.changed[index] = content.all[index]
      if (props.onChange) props.onChange(content)
      return {...content}
    })
  }

  return (
    <>
      {context.state.editable ? <props.add onClick={add} /> : null}
      <ul style={styles.ul} >
        {content.all.map((info, index) => (
          <li key={index}>
            <props.component
              onChange={change}
              content={info}
              index={index}
              remove={remove}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

List.propTypes = {
  editable: PropTypes.bool,
  component: PropTypes.func.isRequired,
  add: PropTypes.func,
  loading: PropTypes.node,
  ...contentProps,
}

export default List