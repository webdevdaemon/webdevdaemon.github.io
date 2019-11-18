import React, {useState} from 'react'
import Link from 'next/link'

import Card from '../components/card'
import PageWrap from '../layouts/page-wrap'
import LoopList from '../components/loop-list'
import CenterWrap from '../components/utils/center-wrap'

import headshot from '../public/cm-headshot.jpg'

import {Row, Col, Image, Container} from 'react-bootstrap'
import {subtitles, homePageCardLinks} from '../lists'

const Home = () => {
  return (
    <PageWrap title="home">
      <Container className="hero">
        <CenterWrap className="center-wrap">
          <Image className="headshot" src={headshot} />
        </CenterWrap>
        <Row className="title-name">
          <Col xs={12}>
            <h1 className="monogram">{`Charles Morgan`}</h1>
          </Col>
        </Row>
        <Row className="loop-list">
          <LoopList
            list={subtitles}
            interval={5000}
            render={({value, style}) => {
              return (
                <h5 className="current-value" style={style}>
                  {value}
                </h5>
              )
            }}
          />
        </Row>
      </Container>
      <Container className="card-links">
        <Row className="home-cards">
          {homePageCardLinks.map(({href, title, desc, styleObject}) => (
            <Col
              key={`${href}-${title}`}
              md={Math.round(12 / homePageCardLinks.length)}
              sm={12}
            >
              <Link href={href}>
                <Card style={styleObject} title={title} desc={desc} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </PageWrap>
  )
}

export default Home
