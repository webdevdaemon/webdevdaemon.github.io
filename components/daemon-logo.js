import React from 'react'
import logoBlack from '../public/daemon-logo_black.png'
import logoWhite from '../public/daemon-logo_white.png'

import { animated, useSpring } from 'react-spring'

const DaemonLogo = ({ isDarkMode = false }) => {
  return <img src={isDarkMode ? logoWhite : logoBlack} />
}

const AnimatedLogo = animated(DaemonLogo)

export default DaemonLogo
