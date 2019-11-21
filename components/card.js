import React from 'react'
import PropTypes from 'prop-types'
import {slugify} from '../helpers'
import Link from 'next/link'

const Card = ({render, styleObject, title, desc, href}) => {
  if (render) return render()

  const {link, card} = styleObject
  return (
    <div className={`card ${slugify(title)}`} style={card}>
      {href ? (
        <Link href={href} style={link}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </Link>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  desc: PropTypes.string,
  href: PropTypes.string,
  render: PropTypes.func,
  styleObject: PropTypes.shape({
    card: PropTypes.object,
    link: PropTypes.object,
  }),
  title: PropTypes.string,
}
Card.defaultProps = {
  desc: `Carles whatever wolf irony blog Echo Park food truck DIY 
  Thundercats farm-to-table authentic Kickstarter Williamsburg cray`,
  href: null,
  render: null,
  styleObject: {card: {}, link: {}},
  title: 'The Card',
}

export default Card
