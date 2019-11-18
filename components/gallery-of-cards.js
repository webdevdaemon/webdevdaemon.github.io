import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Row'
import {projectCards} from '../lists'
import ScrollBox from './scroll-box'

const GalleryOfCards = props => {
  const margins = ['inherit auto inherit 0', 'inherit 0 inherit auto']

  return (
    <section className="gallery-block cards-gallery">
      <Container>
        <>
          <div className="heading">
            <h2>{`Featured Projects`}</h2>
          </div>
          {/* <ScrollBox> */}
          <Row>
            {projectCards.map(({title, text, header, img}, i) => {
              const style = {margin: margins[i % 0]}
              return (
                <Col key={`${title + i}`} sm={12} med={6}>
                  <Card className={`project-card ${title}`} style={style}>
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay >
                      <Card.Header>{header}</Card.Header>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{text}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              )
            })}
          </Row>
          {/* </ScrollBox> */}
        </>
      </Container>
    </section>
  )
}

export default GalleryOfCards
