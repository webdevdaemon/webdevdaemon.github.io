import React, {useState} from 'react'

import Card from '../components/card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Link from 'next/link'
import LoopList from '../components/loop-list'
import PageWrap from '../layouts/page-wrap'

import useInterval from '@use-it/interval'
import daemon from '../public/daemon.svg'
import headshot from '../public/cm-headshot.jpg'

import {Image} from 'react-bootstrap'
import {subtitles, homePageCardLinks} from '../lists'
import {useTransition, animated} from 'react-spring'

const AnimatedImage = animated(Image)

const Home = () => {
  const [toggle, set] = useState(false)

  const transitions = useTransition(toggle, null, {
    from: {opacity: 0, position: 'absolute', width: '50vh', maxWidth: 400},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })

  const animationTick = useInterval(() => set(!toggle), 7000)

  return (
    <PageWrap title="home">
      <Jumbotron fluid className="hero home">
        <div className="row empty">
          {transitions.map(({item, key, props}) =>
            item ? (
              <AnimatedImage
                className={`trans-image headshot`}
                fluid
                roundedCircle
                src={headshot}
                style={props}
              />
            ) : (
              <AnimatedImage
                className={`trans-image daemon`}
                fluid
                roundedCircle
                src={daemon}
                style={props}
              />
            ),
          )}
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
