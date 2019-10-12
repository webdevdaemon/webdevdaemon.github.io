import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/webdevdaemon', label: 'Github' },
  { href: 'https://linkedin.com/in/cm-webdev', label: 'LinkedIn' },
].map(link => ({ ...link, key: `nav-link-${link.href}-${link.label}` }))

const Nav = ({ isHidden }) => {
  const ControlStyle = { position: 'absolute' }

  return isHidden ? null : (
    <nav className="nav">
      <ul className="left">
        {[
          { title: 'home', slug: '' },
          { title: 'Projects', slug: 'projects' },
          { title: 'Projects', slug: 'hiring' },
        ].map(({ title, slug }) => (
          <li className="nav-li">
            <Link passHref href={`/${slug}`}>
              <a className="navlink">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="right">
        {links.map(({ key, href, label }) => (
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
