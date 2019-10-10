import PropTypes from 'prop-types'
import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'
import { slugify } from '../helpers/index'
import Footer from '../components/footer'

const PageWrap = ({ children, title, description, render }) => {
  const pageClassName = slugify(title)
  return (
    <>
      <Head description={description} title={title} />
      <main className={`page jumbotron ${pageClassName}`}>
        <Nav className={`nav ${pageClassName}`} />
        <section>
          {render instanceof Function
            ? render()
            : children instanceof Function
            ? children()
            : children}
        </section>
        <Footer pageTitle={title} />
      </main>
    </>
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
