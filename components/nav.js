import React from 'react'
import Link from 'next/link'
import {IconGithub, IconLinkedin} from './utils/icons'

const socialLinks = [
  {
    href: 'https://github.com/webdevdaemon',
    label: 'Github',
    Icon() {
      return <IconGithub />
    },
  },
  {
    href: 'https://linkedin.com/in/cm-webdev',
    label: 'LinkedIn',
    Icon() {
      return <IconLinkedin />
    },
  },
].map(link => ({key: `nav-link-${link.href}`, ...link}))

const Nav = ({isHidden, pageClassName}) => {
  const ControlStyle = {position: 'absolute'}

  return isHidden ? null : (
    <nav className={`nav ${pageClassName}`}>
      <ul className="left">
        {[
          {title: 'cm', href: '/'},
          {title: 'Work', href: '/projects'},
          {title: 'Info', href: '/about'},
        ].map(({title, href}) => (
          <li className="nav-li" key={`k${href}`}>
            <Link passHref href={href}>
              <a className="navlink">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="right">
        {socialLinks.map(({key, href, label, Icon}) => (
          <li key={key}>
            <Link passHref href={href}>
              {/* <a className="navlink">{label}</a> */}
              <a className="navlink">
                <Icon />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
