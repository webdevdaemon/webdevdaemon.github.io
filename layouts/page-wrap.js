import PropTypes from 'prop-types'
import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'

const PageWrap = ({children, title, description, render}) => {
  const klass = title.split(' ').join('-').toLowerCase()
  return (
    <main className={`page ${klass}`}>
      <Head description={description} title={title}/>
      <Nav className={title}/>
      <section>
        {render instanceof Function
          ? render()
          : children instanceof Function
            ? children()
            : children}
      </section>
      <footer className="footer">
        <p>{`©️ Charles Morgan, circa ${new Date()}`}</p>
      </footer>
    </main>
  )
}

PageWrap.propTypes = {
  children: PropTypes.any,
  description: PropTypes.string,
  render: PropTypes.func,
  title: PropTypes.string,
}

PageWrap.defaultProps = {
  description: "Charles Morgan's Online Portfolio",
  render: null,
  title: 'Charles Morgan: Web Developer Extraordinaire',
}

export default PageWrap
