import React from 'react'

const ContentView = ({ children, ...props }) => {
  return (
    <section className={`content-view ${props.className}`}>{children}</section>
  )
}

export default ContentView
