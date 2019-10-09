import React from 'react'
import logoBlack from '../static/daemon-logo_black.png'
import logoWhite from '../static/daemon-logo_white.png'

const DaemonLogo = ({isDarkMode = false}) => {
  return (
    <img src={isDarkMode ? logoWhite : logoBlack}/>
  )
}

export default DaemonLogo
