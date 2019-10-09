import React from 'react'
import Link from 'next/link'

const links = [
  {href: 'https://github.com/webdevdaemon', label: 'Github'},
  {href: 'https://linkedin.com/in/cm-webdev', label: 'LinkedIn'},
].map(
  link => ({...link, key: `nav-link-${link.href}-${link.label}`, })
)

const Nav = ({isHidden}) => {

  const ControlStyle = {position: 'absolute'}

  return (
    <nav className="nav">
      <ul className="left">
        <li>
          <Link passHref href="/">
            <a className="navlink">Home</a>
          </Link>
        </li><li>
          <Link passHref href="/projects">
            <a className="navlink">Projects</a>
          </Link>
        </li><li>
          <Link passHref href="/resume">
            <a className="navlink">Resume</a>
          </Link>
        </li>
      </ul>
      <ul className="right">
        {links.map(({key, href, label}) => (
          <li key={key}>
            <Link passHref href={href}>
              <a className="navlink">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
