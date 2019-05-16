import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => (
  <div style = {
    {
      position: 'fixed',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <CircularProgress
      size={60}
      thickness={5}
    />
  </div>
)

export default Loading