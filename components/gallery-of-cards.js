import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Row'
import {projectCards} from '../lists'
import ScrollBox from './scroll-box'

const GalleryOfCards = props => {
  return (
    <section className="gallery-block cards-gallery">
      <Container>
        <>
          <div className="heading">
            <h2>{`Featured Projects`}</h2>
          </div>
          <ScrollBox>
            <Row>
              {projectCards.map(({title, text, header, img}) => {
                return (
                  <Col sm={12} med={2} lg={3}>
                    <Card className="text-white">
                      <Card.Img src={img} alt="Card image" />
                      <Card.ImgOverlay>
                        <Card.Header>{header}</Card.Header>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </ScrollBox>
        </>
      </Container>
    </section>
  )
}

export default GalleryOfCards
