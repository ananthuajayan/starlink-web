import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Homecontainer from '../images/carosel container.png';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='moving-carousel'>
      <Carousel.Item className='carousel-item'>
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={Homecontainer}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h2><b>BEST CONTAINER SELLERS</b> </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
            faucibus scelerisque eleifend donec pretium. In ante metus dictum
            at. Lacus sed turpis tincidunt id
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={Homecontainer}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2><b>BEST SELLING MOTORS HOME</b></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={Homecontainer}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2><b>BEST CARAVANS AVAILABLE</b></h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
