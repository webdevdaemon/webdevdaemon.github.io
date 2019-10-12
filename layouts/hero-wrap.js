import PropTypes from 'prop-types'
import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'
import Footer from '../components/footer'
import ContentView from '../components/content-view'
import { slugify } from '../helpers/index'


const HeroWrap = ({
  children,
  hideNavbar,
  hideFooter,
  title,
  description,
  ...props
}) => {
  const klassName = slugify(title)
  return (
    <main className={`hero-page ${klassName}`}>
      <Nav isHidden={hideNavbar} />
      <Head description={description} title={title} />
      {!hideNavbar && <Nav className={title} />}
      <ContentView>{children}</ContentView>
      {!hideFooter && (
        <footer className={`footer ${klassName}`}>
          <p>{`©️ Charles Morgan, circa ${new Date()}`}</p>
        </footer>
      )}
    </main>
  )
}

HeroWrap.propTypes = {
  children: PropTypes.any,
  description: PropTypes.string,
  render: PropTypes.func,
  showFooter: PropTypes.any,
  showNavbar: PropTypes.any,
  title: PropTypes.string,
}

HeroWrap.defaultProps = {
  description: "Charles Morgan's Online Portfolio",
  render: null,
  title: 'Charles Morgan: Web Developer Extraordinaire',
  showFooter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default HeroWrap
