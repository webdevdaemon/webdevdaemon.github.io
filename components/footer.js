import PropTypes from 'prop-types'
import React from 'react'

const d = new Date()

const Footer = ({
  render = null,
  children,
  isHidden,
  styleFooter,
  styleContent,
  pageClassName,
  ...props
}) => {
  return isHidden ? null : (
    <footer className={`footer ${pageClassName}`} style={styleFooter}>
      {render ? (
        render()
      ) : (
        <>
          <div className="content" style={styleContent}>
            {children}
          </div>
          <p>{`Charles Morgan (@webDevDaemon) - Online Informational HQ & Professional Web Development Portfolio`}</p>
          <pre>{`© ${d.getFullYear()}`}</pre>
        </>
      )}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  isHidden: PropTypes.bool,
  pageClassName: PropTypes.string,
  render: PropTypes.func,
  styleContent: PropTypes.object,
  styleFooter: PropTypes.object,
}

export default Footer
