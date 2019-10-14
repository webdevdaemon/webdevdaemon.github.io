import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/footer'
import Head from '../components/head'
import Nav from '../components/nav'
import {slugify} from '../helpers/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'

const PageWrap = ({
  children,
  title = '',
  render = null,
  description = '',
  hideNavbar = false,
  hideFooter = false,
  ...props
}) => {
  const pageClassName = slugify(title)
  return (
    <>
      <Head description={description} title={title} />
      <main className={`page-wrap ${pageClassName}`}>
        <Nav className={`nav ${pageClassName}`} isHidden={hideNavbar} />
        <section>{render ? render() : children}</section>
        <Footer pageClassName={pageClassName} isHidden={hideFooter} />
      </main>
    </>
  )
}

PageWrap.propTypes = {
  description: PropTypes.string,
  hideFooter: PropTypes.bool,
  hideNavbar: PropTypes.bool,
  children: PropTypes.any,
  render: PropTypes.func,
  title: PropTypes.string,
}

export default PageWrap
