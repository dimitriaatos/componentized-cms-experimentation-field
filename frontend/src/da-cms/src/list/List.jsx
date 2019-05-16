import React, { Suspense, useContext } from 'react'
import PropTypes from 'prop-types'
import {Context, Loading, useContent} from '../main/Main'
// import UrlSafeString from 'url-safe-string'

const styles = {
  ul: {
    listStyleType: 'none',
    padding: '0',
    backgroundColor: 'inherit',
  },
}

const List = props => {
  const context = useContext(Context)
  const [content, setContent] = useContent(props.path)

  const add = () => {
    setContent([...content].splice(0, 0, {}))
  }

  const handleChange = (index, value) => {
    // setContent(prevContent => ({
    //   list: [...prevContent.list].splice(index, 1, value)
    // }))
  }

  return (
    <Suspense fallback={props.loading ? <props.loading/> : Loading ? <Loading/> : null } >
      <ul style={styles.ul} >
        {context.state.editable ? <props.addButton onClick={add} /> : null}
        {content.map((info, index) => (
          <li key={index}>
            <props.component
              onChange={handleChange}
              info={info}
              editable={props.editable}
            />
          </li>
        ))}
      </ul>
    </Suspense>
  )
}

List.propTypes = {
  path: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  component: PropTypes.func.isRequired,
  addButton: PropTypes.element,
  loading: PropTypes.element,
}

export default List