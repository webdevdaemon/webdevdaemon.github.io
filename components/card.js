import React from 'react'
import PropTypes from 'prop-types'

const Card = ({title, desc, children, render, styleObject, ...props}) => {

  return (
    <div
      className={`card ${props.className ? props.className : title}`}
      style={styleObject}
    >
      {render ? render(props)
        : (
          <><h3>{title}</h3>
            <p>{desc}</p></>
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
  title: 'A Card!',
  desc: 'What this card does...'
}

export default Card