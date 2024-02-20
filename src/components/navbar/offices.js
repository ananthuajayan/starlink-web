import { useState } from 'react';
import bgi from '../images/pagestart.png';
import Campervans from '../images/staytuned.jpg';
import Mymodal from "../navbar/secondmodal";


const Office = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleClose = () => setShow(false);
  const handleShow = (productName) => {
    setSelectedProduct(productName);
    setShow(true);
  };


   const product = [
    {
      image:Campervans,
      prodcut:"Standard Container Offices",
      section:"Container Office",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:Campervans,
      prodcut:"Modular Container Office",
      section:"Container Office",
      para:"Compact and versatile, our Class B motor homes, also known as campervans, offer the convenience of a smaller footprint without compromising on essential amenities. Perfect for adventurous travelers, these motor homes are easy to maneuver and suitable for both urban and off-road excursions."
    },
    {
      image:Campervans,
      prodcut:"Multi Story Container Office",
      section:"Container Office",
      para:"Enjoy the simplicity of pop-up campers, which fold down for easy towing and storage and expand to provide comfortable sleeping and living space when set up. These motor homes are a popular choice for those who value a lightweight and economical option."
    },
    {
      image:Campervans,
      prodcut:"Conference Rooms",
      section:"Container Office",
      para:"Combining the best of Class A and Class B, our Class C motor homes are characterized by a distinctive cab-over bunk. These vehicles offer a spacious interior with a variety of sleeping arrangements, making them an excellent choice for families or larger travel groups."
    },
    {
      image:Campervans,
      prodcut:"Customized Container Office",
      section:"Container Office",
      para:"For those who prefer the flexibility of towable accommodations, our travel trailers provide a wide range of options. From compact trailers to larger models with multiple slide-outs, these motor homes offer the freedom to unhitch and explore without bringing the entire living space."   
     },
    {
      image:Campervans,
      prodcut:"Eco Friendly Office",
      section:"Container Office",
      para:"Offering enhanced stability and additional living space, fifth wheel trailers are designed to be towed by a pickup truck with a special hitch. These motor homes often feature elevated master bedrooms over the truck bed, providing a unique and spacious layout."
    },
    {
      image:Campervans,
      prodcut:"Office with Restroom",
      section:"Container Office",
      para:"Ideal for outdoor enthusiasts, toy haulers combine living space with a dedicated garage area for storing motorcycles, ATVs, or other recreational equipment. This versatile design caters to adventure seekers who want to bring their toys on the road."
    },
  ]
  return (
    <>
      <Mymodal show={show} setShow={setShow} handleClose={handleClose} selectedProduct={selectedProduct} />

      <div className="page-start">
        <img src={bgi} alt=""  id='bg-image'/>
        <div className="overlay-2"></div>
        <div className="product-page">
         
          <div className="motor-details">
            <h1><b>Container Offices</b></h1>
            <p>
            Redefine your workspace with our innovative container offices. Offering a blend of functionality and aesthetics, our container offices provide a versatile solution for businesses seeking cost-effective and customizable office spaces. Tailor the design to meet your specific requirements and enhance productivity.           
             </p>
            <p id='para-1'>
            Office containers, also known as mobile office containers or container offices, are versatile and modular structures that provide a flexible and convenient solution for temporary office space needs. These containers are often repurposed from standard shipping containers, offering a cost-effective and sustainable alternative to traditional brick-and-mortar office spaces.
            </p>
            <h5>Low Delivery Charges</h5>
            <h5>Safe & Secure Movement</h5>
            <h5>Quick Delivery Service</h5>
          </div>
        </div>
      </div>

      <div className="container">
         <div className="containers">
          {
            product.map((data,index)=>{
              return<div className='product-card' key={index}>
              <div className='card-image'>
                <img src={data.image} alt="" />
              </div>
              <div className="product-name">
                {data.prodcut}
              </div>
              <div className="product-type">
                {data.section}
              </div>
              <div className="product-description">
                {data.para}
              </div>
              <button onClick={()=>handleShow(data.prodcut)}>
                Enquire
              </button>
            </div>
            })
          }
          
         </div>
      </div>
    </>
  );
}

export default Office;
