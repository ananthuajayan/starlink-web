import { useState } from 'react';
import bgi from '../images/pagestart.png';
import Campervans from '../images/staytuned.jpg';
import Mymodal from "../navbar/secondmodal";

const Containers = () => {
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
      prodcut:"Dry Containers",
      section:"Container",
      para:'Our dry containers are designed to meet industry standards and come in various sizes to accommodate different cargo loads. Our containers are made of durable and weather-resistant steel, ensuring that your cargo remains safe and secure during transportation.'
    },
    {
      image:Campervans,
      prodcut:"Generator Sets",
      section:"Container",
      para:"Designed to meet the unique needs of its customers. Our generator sets are built to withstand harsh environments and provide reliable power when you need it the most. We offer a wide range of generator sets with different power capacities to suit the needs of various industries."
    },
    {
      image:Campervans,
      prodcut:"Open Top Containers",
      section:"Container",
      para:"Our open top containers are ideal for goods such as heavy machinery, pipes, and logs that require top loading or need to be loaded with a crane. Our containers are constructed with durable materials and have reinforced corner castings for added strength."
    },
    {
      image:Campervans,
      prodcut:"Refrigerated Containers",
      section:"Container",
      para:"State-of-the-art refrigeration units that can maintain the required temperature and humidity levels, ensuring the quality and freshness of your goods throughout the journey. We also provide 24/7 monitoring and support services to ensure that the containers are always in optimal condition."
    },
    {
      image:Campervans,
      prodcut:"Double Door Containers",
      section:"Container",
      para:"Designed to provide our customers with an efficient and secure way to transport goods. Our Double Door Containers feature doors on both ends, which allows for easy loading and unloading of cargo, making them ideal for transporting goods across long distances."
     },
    {
      image:Campervans,
      prodcut:"ISO Fluid Tank",
      section:"Container",
      para:"Designed and built to meet the highest industry standards and are equipped with features such as insulation, heating/cooling systems, and pressure relief valves to ensure the safe and efficient transport of your cargo."
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
            <h1><b>Containers</b></h1>
            <p>
            Containers, in the context of your inquiry, typically refer to shipping containers or storage containers. These large, standardized steel boxes are widely used for the transportation and storage of goods around the world. Here's a detailed description:             </p>
            <p id='para-1'>
            Our open top containers are ideal for goods such as heavy machinery, pipes, and logs that require top loading or need to be loaded with a crane. Our containers are constructed with durable materials and have reinforced corner castings for added strength.            </p>
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

export default Containers;
