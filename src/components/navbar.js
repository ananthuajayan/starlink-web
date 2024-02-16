import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainicon from '../components/images/Rectangle 2 (1).png';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className='head-section '>
        <div className='main-icon'>
          <div className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/'>
              <img src={mainicon} alt="" />
            </Link>
          </div>
        </div>

        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/'>Home</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'active' : ''}>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li className='product-li'>
            Product
            <ul id='sub-list'>
              <li>
                <Link to='/products/motor'>Motor Homes</Link>
              </li>
              <li>
                <Link to='/products/office'>Container Offices</Link>
              </li>
              <li>
                <Link to='/products/caravans'>Caravans</Link>
              </li>
              <li>
                <Link to='/products/containers'>Containers</Link>
              </li>
              
            </ul>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>

        <div className='enquire-button'>
          <button>Enquire now</button>
        </div>
        <i className="fas fa-bars"></i>

      </div>
    </>
  );
}

export default Navbar;
