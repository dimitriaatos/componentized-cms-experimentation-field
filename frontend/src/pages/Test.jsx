import React, { useState } from 'react'
import Text from './../da-cms/src/text/Text'

const Display = props => {
  const [state, setState] = useState(props.content)
  return (
    <Text content={state}>
    </Text>
  )
}

const initState = ['one', 'two', 'three']

const Test = props => {
  const [state, setState] = useState(initState)
  const add = () => {
    setState(state => [...state, 'new'])
  }
  return (
    <>
    <button onClick={add}>add</button>
    {state.map((item, index) => <Display key={index} content={item} />)}
    </>
  )
}

 export default Test