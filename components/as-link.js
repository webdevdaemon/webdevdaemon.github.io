import PropTypes from "prop-types";
import React from 'react'
import Link from 'next/link'

const AsLink = ({href = '', as = '', children, ...props}) => {
  // let _children = null
  // if (children instanceof Function) {
  //   _children = React.forwardRef(
  //     ({onClick, href}, ref) =>
  //       <a ref={ref} onClick={onClick} href={href}>{children()}</a>
  //   )
  // }

  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  )
}

AsLink.propTypes = {
  as: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string
}

export default AsLink