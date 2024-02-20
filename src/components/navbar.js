import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainicon from '../components/images/Rectangle 2 (1).png';
import Mymodal from '../components/navbar/modal';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {
    handleToggleMenu();
    handleShow();
  };
  return (
    <>
    <Mymodal show={show} setShoe={setShow} handleClose={handleClose}/>
      <div className={`head-section ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='main-icon'>
          <div className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/'>
              <img src={mainicon} alt="" />
            </Link>
          </div>
        </div>

        <ul className={`main-nav-list ${isMenuOpen ? 'menu-open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/' onClick={handleToggleMenu}>Home</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'active' : ''}>
            <Link to='/about-us' onClick={handleToggleMenu}>About Us</Link>
          </li>
          <li className={`product-li ${isMenuOpen ? 'menu-open' : ''}`}>
            Product
            <i className="fas fa-caret-down"></i> 
            <ul id='sub-list'>
              <li>
                <Link to='/products/motor' onClick={handleToggleMenu}>Motor Homes</Link>
              </li>
              <li>
                <Link to='/products/office' onClick={handleToggleMenu}>Container Offices</Link>
              </li>
              <li>
                <Link to='/products/caravans' onClick={handleToggleMenu}>Caravans</Link>
              </li>
              <li>
                <Link to='/products/containers' onClick={handleToggleMenu}>Containers</Link>
              </li>
            </ul>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to='/contact' onClick={handleToggleMenu}>Contact Us</Link>
          </li>
        </ul>

        <div className='enquire-button'>
          <button onClick={handleButtonClick}>Enquire now</button>
        </div>

        <div className='menu-toggle' onClick={handleToggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
