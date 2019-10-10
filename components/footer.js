import React from 'react'

function Footer({ bgColor, color, children, pageTitle, ...props }) {
  return (
    <footer className={`footer ${pageTitle}`}>
      {children ? children : <p>{`©️ Charles Morgan, circa ${new Date()}`}</p>}
    </footer>
  )
}

export default Footer
