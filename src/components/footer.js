import React from 'react';
import email from './images/email.png';
import location from './images/location.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-details">
          <h5><b>Products</b></h5>
          <div className="footer-info" id="prod">
            <h6>Motor Homes</h6>
            <h6>Caravans</h6>
            <h6>Container Offices</h6>
            <h6>Containers</h6>
          </div>
        </div>

        <div className="footer-details">
          <h5><b>Contact</b></h5>
          <div className="footer-info">
            <div className="adress">
              <img src={location} alt="" />
              <h6>Dubai Silicon Oasis- Dubai- UAE</h6>
            </div>
            <div className="adress">
              <img src={email} alt="" />
              <h6><a href="mailto:contact@starlinkexp.com">contact@starlinkexp.com</a></h6>
            </div>
          </div>
        </div>

        <div className="footer-details">
          <h5><b>Follow us on</b></h5>
          <div className="footer-info">
            <a href="https://www.facebook.com/profile.php?id=61553661886946">
              <div className="social-medias">
                <img src={facebook} alt="" />
                <h6>Facebook</h6>
              </div>
            </a>
            <a href="https://www.instagram.com/starlink_trading/">
              <div className="social-medias">
                <img src={instagram} alt="" />
                <h6>Instagram</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-details">
          <h5><b>Map</b></h5>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5050501399555!2d55.37514627537925!3d25.11861057776157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f9f1fbfb607%3A0x4db0a2f5f59532d9!2sIFZA%20Business%20Park!5e0!3m2!1sen!2sin!4v1705284994356!5m2!1sen!2sin"
              width="100%" height="100%" frameBorder="0"
              style={{ border: '0', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
