// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal(props) {
    const modalStyle = {
        zIndex: 9999
      };
console.log(props.selectedProduct)


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
              <label for="nestedSelect" htmlFor='select'>Product</label>
              <input type="text"  id='select' value={props.selectedProduct} readOnly/>

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