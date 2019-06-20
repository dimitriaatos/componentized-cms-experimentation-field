import React from 'react'
import Text from './da-cms/src/text/Text'
import Html from './da-cms/src/html/Html'
import Array from './da-cms/src/array/Array'

import CodeIcon from '@material-ui/icons/Code'
import LaunchIcon from '@material-ui/icons/Launch'
import Button from '@material-ui/core/Button'
import { contentProps } from './da-cms/src/main/Main';
// import DateDisplay from './da-cms/src/date/DateDisplay';

const MultiClick = class {
  constructor(callback, options) {
    this.clicks = 0
    this.prev = 0
    Object.assign(this, {time: 400, clicks: 3}, options, {callback})
  }
  click({timeStamp}) {
    
    if (timeStamp - this.prev < this.time) {
      this.count += 1
      if (this.count > this.clicks -2) {
        
        this.count = 0
        this.callback()
      } else {
        this.prev = timeStamp
      }
    } else {
      this.prev = timeStamp
      this.count = 0
    }
  }
}

const dateDisplay = ({content}) => {
  if (!content) content = new Date()
  if (typeof content == 'string') content = new Date(content)
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ]
  return `${content.getDate()} ${months[content.getMonth()]} ${content.getFullYear()}`
}

const date = d => dateDisplay(d)

const commas = ({content}) => content.join(', ')

const and = ({content}) => {
  let str = ''
  if (content) {
    content.forEach((value, index) => {
      switch (index) {
        case content.length - 2:
          str = str.concat(value + ' and ')
        break
        case content.length - 1:
          str = str.concat(value)
        break
        default:
          str = str.concat(value + ', ')
      }
    })
  }
  
  return str
}

const makeTitle = name => {
  return name
  .replace(/([A-Z])/g, ' $1')
  .replace(/^./, str => str.toUpperCase())
}

// import {useState} from 'react'
// const Display = props => {
//   const [state, setState] = useState(props.content)
//   return (
//     <Text content={state}>
//     </Text>
//   )
// }

const text = props => <Text {...props} />
// const text = (content, name) => <div>{content}</div>
// const text = (content, name) => <Display content={content} ></Display>

const html = props => <Html {...props} />

const array = props => <Array {...props} />

const links = links => {
  links = links ? links : {}
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {
        Object.keys(links).map((key, index) => {
          const label = key == 'source' ? 'Source Code' :
              key == 'visit' ? 'Visit Website' : null
          if (label) {
            return (
              <Button
                key={index}
                style={{margin: '10px'}}
                href={links[key]}
                target="_blank"
                variant="contained"
                aria-label={label}
              >
                {
                  key == 'source' ?
                    <CodeIcon fontSize="large" /> :
                  key == 'visit' ?
                    <LaunchIcon fontSize="large" /> : null
                }
                {label}
              </Button>
            )
          } else {
            return null
          }
        })
      }
    </div>
  )
}

const parser = {date, commas, and, html, text, links, array}

const subset = (...props) => o => props.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

const isObject = value => Object.prototype.toString.call(value) != '[object Object]'

const infoParser = (info, options, editableProps) => {
  return Object.keys(options).reduce((accum, key) => {
    const value = info[key]
    const option = options[key]

    typeof option == 'number' ?
      accum[key] = value :
    typeof option == 'function' ?
      accum[key] = option(editableProps({[key]: value})) :
      null
    
    return accum
  }, {})
}

const editablePropsCreator = changeHandler => (
  contentObject => {
    const [name, content] = Object.entries(contentObject)[0]
    return ({
      onChange: content => changeHandler({[name]: content}),
      placeholder: makeTitle(name),
      content,
    })
  }
)

export { MultiClick, parser, subset, isObject, infoParser, makeTitle, editablePropsCreator }