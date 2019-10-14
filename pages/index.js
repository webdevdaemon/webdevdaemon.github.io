import React from 'react'
import LoopList from '../components/loop-list'
import Card from '../components/card'
import Link from 'next/link'

import {subtitles, homePageCardLinks} from '../lists'
import logo from '../public/daemon.svg'
import PageWrap from '../layouts/page-wrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = () => {
  return (
    <PageWrap title="home">
      <Jumbotron fluid className="hero home">
        <div className="row">
          <img src={logo} width={400} style={{margin: '20px auto'}} />
        </div>
        <h2 className="title">Charles Morgan</h2>
        <h5 className="subtitle">
          Web Developer Extraordinaire
          <br />&<br />
        </h5>
        <LoopList
          list={subtitles}
          interval={2250}
          render={({value, style}) => {
            return (
              <h5 className="description" style={style}>
                {value}
              </h5>
            )
          }}
        />
      </Jumbotron>
      <div className="row">
        {homePageCardLinks.map(({href, title, desc, styleObject}) => (
          <Link key={`${href}-${title}`} href={href} passHref>
            <Card styleObject={styleObject} title={title} desc={desc} />
          </Link>
        ))}
      </div>
    </PageWrap>
  )
}

export default Home
