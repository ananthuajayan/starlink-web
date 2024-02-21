import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal(props) {
  const modalStyle = {
    zIndex: 9999
  };
  // console.log(props.selectedProduct)
  const initialValues = {
    firstname: "",
    lastname: "",
    phno: "",
    email: "",
    product: props.selectedProduct || ""
  };

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phno: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate First Name
    if (formData.firstname.trim() === "") {
      newErrors.firstname = "**First Name is required";
      valid = false;
    } else {
      newErrors.firstname = "";
    }

    // Validate Last Name
    if (formData.lastname.trim() === "") {
      newErrors.lastname = "**Last Name is required";
      valid = false;
    } else {
      newErrors.lastname = "";
    }

    // Validate Phone Number
    if (formData.phno.trim() === "") {
      newErrors.phno = "**Phone Number is required";
      valid = false;
    } else if (!formData.phno.match(/^\d+$/)) {
      newErrors.phno = "**Invalid phone number";
      valid = false;
    } else {
      newErrors.phno = "";
    }

    // Validate Email
    if (formData.email.trim() === "") {
      newErrors.email = "**Email is required";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "**Invalid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return valid;
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setFormData(initialValues);
      setFormSubmitted(true);
      props.handleClose();


      try {
        const response = await axios.post("https://srv442800.hstgr.cloud:2002/starlink/product-enquiry", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = response.data;
        console.log("API Response:", data);
        console.log(formData)

        // Reset form data after successful submission

        // Set form submitted flag to true

        // You can handle success feedback here if needed
        // props.handleClose();
      } catch (error) {
        console.error("Error:", error);
        // You can handle error feedback here if needed
      }
    } else {
      console.log("Form validation failed. Please check the fields.");
    }
  };

  const handleAlertClose = () => {
    // Reset the form submission status when the alert is closed
    setFormSubmitted(false);
  };

  useEffect(() => {
    // Close the alert after 3 seconds when it is displayed
    if (isFormSubmitted) {
      const timeoutId = setTimeout(() => {
        handleAlertClose();
      }, 3000);

      // Clear the timeout when the component unmounts or when the alert is manually closed
      return () => clearTimeout(timeoutId);
    }
  }, [isFormSubmitted]);



  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} id="modal" style={modalStyle}>
        <Modal.Header closeButton>
          <Modal.Title>Product Enquire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="col enquire-col">
              <label htmlFor="firstname">First Name</label>
              <input type="text"
                placeholder='Enter first name'
                id='fname'
                name='firstname'
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col enquire-col">
              <label htmlFor="secondname">Last Name</label>
              <input
                type="text"
                placeholder='Enter last name'
                id='lastname'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col enquire-col">
              <label htmlFor="phonenum">Phone Number</label>
              <input
                type="text"
                placeholder='Enter phone number'
                id='phone'
                name='phno'
                value={formData.phno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col enquire-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='Enter email'
                id='mailid'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='col enquire-col'>
              <label htmlFor='select'>Product</label>
              <input
                type="text"
                id='select'
                name='product'
                value={props.selectedProduct}
                readOnly
              />
              {/* Optionally, you can display an error message for the product */}
              <span>{errors.product}</span>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='enquire-button'>
          <Button onClick={(e) => { e.preventDefault();  handleSubmit(e); }}>
            Notify Us
          </Button>
        </Modal.Footer>
      </Modal>
      {isFormSubmitted && (
        <div className="custom-alert" >
          Form submitted successfully!
        </div>
      )}
    </>
  );
}

export default ContactModal;