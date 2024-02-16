import React from 'react';
import mailbox from '../components/images/mailbox.png'


const contactnavbar = () => {
  return (
    <>
      <div className='contact-navbar'>
        <div className="contacts">
            <div id='mailbox' >
                <img src={mailbox} alt="" />
            </div>
            <h6>contact@starlinkexp.com</h6>
        </div>
        <div className="contacts">
            <h6>Dubai Silicon Oasis- Dubai- UAE</h6>
        </div>
        <div className="contacts">
            <a href="https://www.facebook.com/profile.php?id=61553661886946"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/starlink_trading/"><i class="fab fa-instagram"></i></a>
          
        </div>
      </div>
    </>
  );
}

export default contactnavbar;
