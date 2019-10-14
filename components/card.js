import React from 'react'
import PropTypes from 'prop-types'
import {slugify} from '../helpers'

const Card = ({
  render,
  children,
  styleObject,
  title,
  desc,
  ...props
}) => {
  return (
    <div className={`card ${slugify(title)}`} style={styleObject}>
      {render ? (
        render()
      ) : (
        <>
          <h3>{title}</h3>
          <p>{desc}</p>
        </>
      )}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  desc: PropTypes.string,
  render: PropTypes.func,
  styleObject: PropTypes.object,
  title: PropTypes.string,
}
Card.defaultProps = {
  title: 'The Card',
  desc: 'Describing The Card',
}

export default Card
