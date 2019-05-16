import React from 'react'
import Text from './da-cms/src/text/Text'
import ReactHtmlParser from 'react-html-parser'

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

const date = date => {
  if (typeof date == 'string') date = new Date(date)
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ]
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}

const commas = array => array.join(', ')

const and = array => {
  let str = ''
  array.forEach((value, index) => {
    switch (index) {
      case array.length - 2:
        str = str.concat(value + ' and ')
      break
      case array.length - 1:
        str = str.concat(value)
      break
      default:
        str = str.concat(value + ', ')
    }
  })
  return str
}

const rich = content => <Text content={content}></Text>

const html = content => ReactHtmlParser(content)

const parser = {date, commas, and, html, rich}

const subset = (...props) => o => props.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

const isObject = (value) => Object.prototype.toString.call(value) != '[object Object]'

const infoParser = (info, options) => {
  return Object.keys(options).reduce((accum, key) => {
    const value = info[key]
    const option = options[key]

    typeof option == 'number' ?
      accum[key] = value :
    typeof option == 'function' ?
      accum[key] = option(value) :
      null
    
    return accum
  }, {})
}

export { MultiClick, parser, subset, isObject, infoParser }