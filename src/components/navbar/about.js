import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Accordian from './accordian';
import ContainerHouse from '../images/container-tudo-sobre-wilson-scaled.jpeg';
import Slash from '../images/slash.png';

const About = () => {
  const Testimonials = [
    {
      Name: "Sagitra Nath",
      Para: "In this world of competitions, to bring a business into the limelight, we need the right strategies and planning. Lunar stood with us in this journey with their best services. Their digital marketing team created the best plans as per our needs. Looking ahead for their bright future."
    },
    {
      Name: "Alex johnson",
      Para: "I can't express enough how grateful I am to have partnered with Lunar enterprise for our marketing needs.Thanks to the SEO expertise and social media magic, our online presence skyrocketed. The team's dedication and professionalism are unmatched. Grateful for the results and partnership."
    },
    {
      Name: "rolex",
      Para: "In this world of competitions, to bring a business into the limelight, we need the right strategies and planning. Lunar stood with us in this journey with their best services. Their digital marketing team created the best plans as per our needs. Looking ahead for their bright future."
    },
    {
      Name: "Ananthu",
      Para: "In this world of competitions, to bring a business into the limelight, we need the right strategies and planning. Lunar stood with us in this journey with their best services. Their digital marketing team created the best plans as per our needs. Looking ahead for their bright future."
    },
    {
      Name: "Ananthu",
      Para: "In this world of competitions, to bring a business into the limelight, we need the right strategies and planning. Lunar stood with us in this journey with their best services. Their digital marketing team created the best plans as per our needs. Looking ahead for their bright future."
    },
    {
      // image:ContainerHouse,
      Name: "Ananthu",
      Designation: "CEO of India",
      Para: "In this world of competitions, to bring a business into the limelight, we need the right strategies and planning. Lunar stood with us in this journey with their best services. Their digital marketing team created the best plans as per our needs. Looking ahead for their bright future."
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust based on your design needs
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700, // Adjust based on your design needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center">
        <div className="overlay-2"></div>
        <h1>About Us</h1>
      </div>

      <div className="container" style={{ display: "flex", alignItems: "center" }}>
        <div className="container-image">
          <img src={ContainerHouse} alt="" />
        </div>
        <div className='home-about-details' id='contents'>
          <div className='line'>
            <div id='line'></div>
            <h5>About Our Company</h5>
          </div>
          <h2>
            Star Link Trading
          </h2>
          <p>
            Starlinks Trading - FZCO takes pride in being a distinguished provider of versatile and innovative solutions, specializing in the sale of various containers, motor homes, and container offices. Established with a commitment to excellence, our company has emerged as a prominent player in the industry, offering a diverse range of high-quality products to meet the distinctive needs of our valued clients.
          </p>

          <h5>Our Vision</h5>
          <p>At Starlinks Trading - FZCO, our vision is to redefine the boundaries of container-related solutions. We aspire to become the preferred destination for individuals and businesses seeking reliable, functional, and customized container solutions. Our ultimate goal is to play a pivotal role in shaping efficient and sustainable spaces for the future.</p>
          <h5>Our Mission</h5>
          <p>Our mission is to deliver top-tier container, motor home, and container office solutions that surpass the expectations of our clients. We are dedicated to providing innovative, cost-effective, and environmentally responsible products that contribute to the success and growth of our customers.</p>
        </div>
      </div>

      <div className="text-center" id='about-caption'>
        <div className="overlay-2"></div>
        <p>Discover freedom on the road and versatility in every space with our premium range of caravans, motorhomes, containers, and container offices.</p>
      </div>

      <div className="container" >
        <div className='home-about-details' id='contents'>
          <h2>
            What Sets Us Apart
          </h2>
          <p>
            Distinctively exploit optimal alignments for intuitive business applications through revolutionary catalysts for chang the Seamlessly optimal optimal alignments for intuitive.
          </p>

          <h5>Quality Assurance</h5>
          <p>
            Distinctively exploit optimal alignments for intuitive business applications through revolutionary catalysts for chang the Seamlessly optimal optimal alignments for intuitive.
          </p>
          <h5>Commitment to Sustainability</h5>
          <p>
            Distinctively exploit optimal alignments for intuitive business applications through revolutionary catalysts for chang the Seamlessly optimal optimal alignments for intuitive.
          </p>
          <Accordian />

        </div>
        <div className='sets-us-apart'>
          <img src={ContainerHouse} alt="" />
          <img src={ContainerHouse} alt="" />
        </div>


      </div>

      <div className="best-deal">
        <h2>Lets Hear What People Says</h2>
      </div>

      <div className="container-md">
        <Slider {...settings}>
          {
            Testimonials.map((data, index) => {
              return <div className='testimonial-card'>

                <div className='design'>
                  <img src={Slash} alt="" />
                </div>
                <h5>{data.Name}</h5>
                <p>{data.Para}</p>
              </div>
            })
          }
        </Slider>

      </div>

    </>
  );
}

export default About;
