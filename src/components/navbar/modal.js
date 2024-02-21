import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function ContactModal(props) {
  const modalStyle = {
    zIndex: 9999
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    phno: "",
    email: "",
    container: "Class A  motor homes"
  };
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData(initialValues);
      setFormSubmitted(true);
      props.handleClose();


      try {
        const response = await axios.post("https://srv442800.hstgr.cloud:2002/starlink/container-enquiry", formData, {
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
    setShowAlert(false);
  };
  
  useEffect(() => {
    if (isFormSubmitted) {
      setShowAlert(true);
  
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
                id='firstname'
                name='firstname'
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <span>{errors.firstname}</span>
            </div>
            <div className="col enquire-col">
              <label htmlFor="secondname">Second Name</label>
              <input
                type="text"
                placeholder='Enter second name'
                id='secondname'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              <span>{errors.lastname}</span>
            </div>
            <div className="col enquire-col">
              <label htmlFor="phonenum">Phone Number</label>
              <input
                type="text"
                placeholder='Enter phone number'
                id='phonenum'
                name='phno'
                value={formData.phno}
                onChange={handleChange}
                required
              />
              <span>{errors.phno}</span>
            </div>

            <div className="col enquire-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='Enter email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>{errors.email}</span>
            </div>
            <div className='col enquire-col'>
              <label htmlFor="nestedSelect">Choose your container</label>
              <select id="nestedSelect" name="container" value={formData.container} onChange={handleChange}>
            
                <optgroup label="motor homes" class="parent-option sub-options">
                  <option value="Class A motor homes">Class A motor homes</option>
                  <option value="Campervans">Campervans</option>
                  <option value="Class C Motor homes">Class C Motor Homes</option>
                  <option value="Fifth wheel Trailors">Fifth Wheel Trailors</option>
                  <option value="Travael Trailors">Travel Trailors</option>
                  <option value="Toy Haulers">Toy Haulers</option>
                </optgroup>

                <optgroup label="Caravans" class="parent-option sub-options">
                  <option value="pop top caravans">Pop Top Caravans</option>
                  <option value="Off Road caravans">Off Road Caravans</option>
                  <option value="family caravans">Family Caravans</option>
                  <option value="luxury caravans">Luxury Caravans</option>
                  <option value="compact caravans">Compact Caravans</option>
                  <option value="hybrid caravans">Hybrid Caravans</option>
                </optgroup>

                <optgroup label="Container Office" class="parent-option sub-options">
                  <option value="standard container office">Standard Container Offices</option>
                  <option value="modular container office">Modular Container Office</option>
                  <option value="multi story container office">Multi Story Container Office</option>
                  <option value="customized container office">Customized Container Office</option>
                  <option value="container conference office">Container Conference Room</option>
                  <option value="eco friendly container office">Eco friendly Container Office</option>
                  <option value="container office with washroom">Container Office with Restroom</option>
                </optgroup>
                <optgroup label="Containers" class="parent-option sub-options">
                  <option value="Dry containers">Dry Containers</option>
                  <option value="generator sets">Generator Sets Containers</option>
                  <option value="open top containers">Open Top Containers</option>
                  <option value="refrigarated containers">Refrigerated Containers</option>
                  <option value="double door containers">Double Door Containers</option>
                  <option value="ISO fluid tanks">ISO Fluid tank</option>
                </optgroup>              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='enquire-button'>
          <Button type="submit" onClick={handleSubmit}>
            Notify Us
          </Button>
        </Modal.Footer>
      </Modal>
      <Alert variant="success" show={showAlert} onClose={handleAlertClose} dismissible style={{position:"fixed", top:"50px", left:"50%", transform:"translate(-50%,-50%",zIndex:"9000",padding:"50px"}}>
  Form submitted successfully!
</Alert>

    
    </>
  );
}

export default ContactModal;
