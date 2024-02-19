import React from 'react';
import bgi from '../images/pagestart.png';
import motorhomes from '../images/mmhomes.jpg';

const motor = () => {

  const product = [
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
    {
      image:motorhomes,
      prodcut:"Class A Motor Homes",
      section:"Motor Homes",
      para:"Our Class A motor homes are the epitome of luxury on wheels. These spacious and well-appointed vehicles feature a bus-like design, providing ample living space, fully-equipped kitchens, and often include slide-out sections to enhance interior room when parked."
    },
  ]
  return (
    <>
      <div className="page-start">
        <img src={bgi} alt=""  id='bg-image'/>
        <div className="overlay"></div>
        <div className="product-page">
          <div className="motor-image">
            <img src={motorhomes} alt="" />
          </div>
          <div className="motor-details">
            <h1><b>Motor Homes</b></h1>
            <p>
            Embark on a journey of comfort and adventure with our range of motor homes. Designed for those who seek the freedom of the open road without compromising on comfort, our motor homes combine functionality with style, providing a home away from home.
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
              return<div className='product-card'>
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
              <button>
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

export default motor;
