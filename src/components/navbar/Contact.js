import React from 'react';
import ContainerHouse from '../images/Luxury Caravans.jpg'

const contact = () => {
  return (
    <>
      <div className="text-center">
        <div className="overlay-2"></div>
        <h1>Contact Us</h1>
      </div>

      <div className="container" style={{ display: "flex", alignItems: "center" }}>

        <div className='home-about-details' id='contents'>
          <div className='line'>
            <div id='line'></div>
            <h5>Contact Us</h5>
          </div>
          <p>
            Explore the boundless possibilities with Starlink Trading - FZCO, and let us be your trusted partner in transforming visions into reality. Contact us today for all your container, motor home, and container office needs.
          </p>
          <div className='contacts-del'>
            <h6><a href="mailto:contact@starlinkexp.com"><span>Mail:</span>contact@starlinkexp.com</a></h6>
            <h6><span>Address:</span>Dubai Silicon Oasis- Dubai- UAE</h6>
          </div>


        </div>
        <div className="contact-image">
          <img src={ContainerHouse} alt="" />
        </div>
      </div>

      <div className="container-md" style={{ marginBottom: "20px" }}>
        <div className='line'>
          <div id='line'></div>
          <h5>Contact Us</h5>
        </div>
      </div>

      <div className="container-md">
        <form action="">
          <div className="row">
            <div className="col">
              <label htmlFor="">First Name</label>
              <input type="text"  placeholder='Enter your Name'/>
            </div>
            <div className="col">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder='Enter your Last Name'/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Email</label>

              <input type="email" placeholder='Enter Your Email'/>
            </div>
            <div className="col">
              <label htmlFor="">Phone Number</label>

              <input type="phone" placeholder='Enter your Number'/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="20" rows="5"></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default contact;
