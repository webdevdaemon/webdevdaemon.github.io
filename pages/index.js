import React from 'react'
import LoopList from '../components/loop-list'
import AsLink from '../components/as-link'
import Card from '../components/card'
import Link from 'next/link'

import { subtitles, homePageCardLinks } from '../lists'
import logo from '../static/daemon.svg'
import HeroWrap from '../layouts/hero-wrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = () => {
  return (
    <HeroWrap title="home">
      <Jumbotron fluid>
        <div className="hero__bg"></div>
        <h1 className="title">Charles Morgan</h1>
        <div className="row">
          <img src={logo} width={350} style={{ margin: '20px auto' }} />
        </div>
      </Jumbotron>
      <LoopList
        list={subtitles}
        interval={2250}
        render={({ value, style }) => {
          return (
            <p className="description" style={style}>
              {value}
            </p>
          )
        }}
      />
      <Jumbotron fluid="true"></Jumbotron>

      <div className="row">
        {homePageCardLinks.map(({ href, title, desc, styleObject }) => (
          <AsLink key={`link-${href}`} href={href}>
            <Card title={title} desc={desc} styleObject={styleObject} />
          </AsLink>
        ))}
      </div>
    </HeroWrap>
  )
}

export default Home
