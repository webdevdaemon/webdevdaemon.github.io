import React from 'react'
import {Icon} from 'react-icons-kit'
import {withBaseIcon} from 'react-icons-kit'

import {blog} from 'react-icons-kit/icomoon/blog'
import {browser_layout_1} from 'react-icons-kit/ikons/browser_layout_1'
import {browser_layout_2} from 'react-icons-kit/ikons/browser_layout_2'
import {browser_layout_3} from 'react-icons-kit/ikons/browser_layout_3'
import {browser} from 'react-icons-kit/ikons/browser'
import {code} from 'react-icons-kit/ikons/code'
import {css3} from 'react-icons-kit/icomoon/css3'
import {cube} from 'react-icons-kit/ionicons/cube'
import {git} from 'react-icons-kit/icomoon/git'
import {github} from 'react-icons-kit/icomoon/github'
import {home} from 'react-icons-kit/icomoon/home'
import {htmlFive2} from 'react-icons-kit/icomoon/htmlFive2'
import {infoLarge} from 'react-icons-kit/typicons/infoLarge'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {menu} from 'react-icons-kit/icomoon/menu'
import {messages} from 'react-icons-kit/typicons/messages'
import {npm} from 'react-icons-kit/icomoon/npm'
import {pen} from 'react-icons-kit/icomoon/pen'
import {profile} from 'react-icons-kit/icomoon/profile'
import {statsBars} from 'react-icons-kit/icomoon/statsBars'
import {statsBars2} from 'react-icons-kit/icomoon/statsBars2'
import {terminal} from 'react-icons-kit/iconic/terminal'
import {wordpress} from 'react-icons-kit/icomoon/wordpress'

const NavIcon = withBaseIcon({size: '100%', style: {color: '#231C17'}})
const HeaderIcon = withBaseIcon({
  size: '100%',
  style: {color: '#231C17'},
})

export const IconAbout = () => <NavIcon icon={infoLarge} />
export const IconBlog = () => <NavIcon icon={blog} />
export const IconBrowser = () => <Icon icon={browser} />
export const IconBrowserLayout1 = () => <Icon icon={browser_layout_1} />
export const IconBrowserLayout2 = () => <Icon icon={browser_layout_2} />
export const IconBrowserLayout3 = () => <Icon icon={browser_layout_3} />
export const IconCode = () => <Icon icon={code} />
export const IconContact = () => <NavIcon icon={messages} />
export const IconCss3 = () => <Icon icon={css3} />
export const IconCube = () => <NavIcon icon={cube} />
export const IconGit = () => <Icon icon={git} />
export const IconGithub = () => <Icon icon={github} />
export const IconHome = () => <NavIcon icon={home} />
export const IconHtmlFive2 = () => <Icon icon={htmlFive2} />
export const IconLinkedin = () => <Icon icon={linkedin} />
export const IconMenu = () => <Icon icon={menu} />
export const IconNpm = () => <Icon icon={npm} />
export const IconPen = () => <Icon icon={pen} />
export const IconResume = () => <NavIcon icon={profile} />
export const IconStatsBars = () => <Icon icon={statsBars} />
export const IconStatsBars2 = () => <Icon icon={statsBars2} />
export const IconTerminal = () => <Icon icon={terminal} />
export const IconWordpress = () => <Icon icon={wordpress} />
