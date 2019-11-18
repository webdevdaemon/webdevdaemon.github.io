import React from 'react'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 0,
  padding: 0,
}

const CenterWrap = ({children, render = null}) => {
  return <div style={styles}>{render ? render() : children}</div>
}

export default CenterWrap
