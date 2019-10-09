import React from 'react'
import baguetteBox from 'baguettebox.js'

const GalleryOfCards = props => {
	//* global lightbox plugin
  
  baguetteBox.run('.cards-gallery', {animation: 'slideIn'})

  return (
    <section className="gallery-block cards-gallery">
      <div className="container">
        <div className="heading">
          <h2>Cards Gallery</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image1.jpg">
                <img src="../img/image1.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>
                <p className="text-muted card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image2.jpg">
                <img src="../img/image2.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>
                <p className="text-muted card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image3.jpg">
                <img src="../img/image3.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>
                <p className="text-muted card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image4.jpg">
                <img src="../img/image4.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>
                <p className="text-muted card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image5.jpg">
                <img src="../img/image5.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>
                <p className="text-muted card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <a className="lightbox" href="../img/image6.jpg">
                <img src="../img/image6.jpg" alt="Card Image" className="card-img-top" />
              </a>
              <div className="card-body">
                <h6>
                  <a href="#">Lorem Ipsum</a>
                </h6>

                <p className="text-muted card-text">
                  {`Lorem ipsum dolor sit amet, consectetur 
														adipiscing elit. Nunc quam urna.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryOfCards
