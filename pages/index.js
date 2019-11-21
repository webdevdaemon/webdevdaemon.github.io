import React from 'react'

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
                <p className="current-value" style={style}>
                  {value}
                </p>
              )
            }}
          />
        </Row>
      </Container>
    </PageWrap>
  )
}

export default Home
