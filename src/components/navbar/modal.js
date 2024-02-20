// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal(props) {
    const modalStyle = {
        zIndex: 9999
      };

  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} id="modal" style={modalStyle}>
        <Modal.Header closeButton>
          <Modal.Title>Product Enquire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <form action="">
             <div className="col enquire-col">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder='Enter first name' id='firstname' />
             </div>
             <div className="col enquire-col">
                <label htmlFor="secondname">Second Name</label>
                <input type="text" placeholder='Enter second name' id='secondname' />
             </div>
             <div className="col enquire-col">
                <label htmlFor="phonenum">Phone Number</label>
                <input type="text" placeholder='Enter phone number' id='phonenum' />
             </div>
             <div className="col enquire-col">
                <label htmlFor="email">Second Name</label>
                <input type="email" placeholder='Enter email' id='email' />
             </div>
             <div className='col enquire-col'>
              <label for="nestedSelect">Choose your container</label>
              <select id="nestedSelect" name="nestedSelect">
                <optgroup label="motor homes" class="parent-option sub-options">
                  <option value="s1-option1">Class A motor homes</option>
                  <option value="s1-option2">Campervans</option>
                  <option value="s1-option3">Class C Motor Homes</option>
                  <option value="s1-option3">Fifth Wheel Trailors</option>
                  <option value="s1-option3">Travel Trailors</option>
                  <option value="s1-option3">Toy Haulers</option>
                </optgroup>

                <optgroup label="Caravans" class="parent-option sub-options">
                  <option value="s2-option1">Pop Top Caravans</option>
                  <option value="s2-option2">Off Road Caravans</option>
                  <option value="s2-option3">Family Caravans</option>
                  <option value="s2-option1">Luxury Caravans</option>
                  <option value="s2-option2">Compact Caravans</option>
                  <option value="s2-option3">Hybrid Caravans</option>
                </optgroup>

                <optgroup label="Container Office" class="parent-option sub-options">
                  <option value="s3-option1">Standard Container Offices</option>
                  <option value="s3-option2">Modular Container Office</option>
                  <option value="s3-option3">Multi Story Container Office</option>
                  <option value="s3-option1">Customized Container Office</option>
                  <option value="s3-option2">Container Conference Room</option>
                  <option value="s3-option3">Eco friendly Container Office</option>
                  <option value="s3-option3">Container Office with Restroom</option>
                </optgroup>
                <optgroup label="Containers" class="parent-option sub-options">
                  <option value="s3-option1">Dry Containers</option>
                  <option value="s3-option2">Generator Sets Containers</option>
                  <option value="s3-option3">Open Top Containers</option>
                  <option value="s3-option1">Refrigerated Containers</option>
                  <option value="s3-option2">Double Door Containers</option>
                  <option value="s3-option3">ISO Fluid tank</option>
                </optgroup>
              </select>

            </div>
           </form>
        </Modal.Body>
        <Modal.Footer className='enquire-button'>
          <Button  onClick={props.handleClose}>
            Notify Us
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal;