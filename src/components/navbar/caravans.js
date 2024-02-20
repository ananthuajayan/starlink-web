import { useState } from 'react';
import bgi from '../images/pagestart.png';
import Campervans from '../images/staytuned.jpg';
import Mymodal from "../navbar/secondmodal";

const Caravans = () => {
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
      prodcut:"Pop Top Caravans",
      section:"Caravans",
      para:"Experience versatility with pop-top caravans that feature a retractable roof section. This design allows for reduced wind resistance during travel and lower overall height for convenient storage. When stationary, the raised roof provides additional headroom, creating a more spacious interior."
    },
    {
      image:Campervans,
      prodcut:"Off Road Caravans",
      section:"Caravans",
      para:"Built to withstand rugged terrains and adventurous landscapes, our off-road caravans are equipped with reinforced chassis, heavy-duty suspension, and off-road tires. These caravans are perfect for those seeking exploration beyond conventional camping grounds."
    },
    {
      image:Campervans,
      prodcut:"Family Caravans",
      section:"Caravans",
      para:"Catering to the needs of larger groups or families, our family caravans are designed with multiple sleeping areas, spacious living quarters, and family-friendly amenities. Enjoy the flexibility to create lasting memories on the road together."
    },
    {
      image:Campervans,
      prodcut:"Luxury Caravans",
      section:"Caravans",
      para:"Indulge in the ultimate caravan experience with our luxury models. These caravans boast high-end finishes, premium furnishings, and state-of-the-art features. Enjoy the road with a touch of opulence and sophistication."
    },
    {
      image:Campervans,
      prodcut:"Compact Caravans",
      section:"Caravans",
      para:"Perfect for solo travelers or couples seeking a more streamlined option, our compact caravans offer a cozy and efficient living space. These caravans are easy to tow and maneuver, making them an excellent choice for urban escapes or weekend getaways."
     },
    {
      image:Campervans,
      prodcut:"Hybrid Caravans",
      section:"Caravans",
      para:"Combining the best features of caravans and camper trailers, hybrid caravans offer a versatile and flexible solution. With expandable sections and innovative designs, these caravans provide a comfortable living space while maintaining the benefits of a towable unit."
    }
    
  ]
  return (
    <>
      <Mymodal show={show} setShow={setShow} handleClose={handleClose} selectedProduct={selectedProduct} />
      <div className="page-start">
        <img src={bgi} alt=""  id='bg-image'/>
        <div className="overlay-2"></div>
        <div className="product-page">
       
          <div className="motor-details">
            <h1><b>Caravans</b></h1>
            <p>
            Experience the joy of mobile living with our diverse range of caravans. From compact and efficient models to spacious and luxurious options, our caravans cater to different preferences and travel styles. Enjoy the flexibility to travel at your own pace and create memorable experiences on the road.            </p>
            <p id='para-1'>
            Caravans, commonly known as travel trailers or camper trailers, are a popular and versatile form of mobile accommodation designed to bring the comforts of home to the great outdoors. These towable living spaces provide a flexible and convenient way for individuals and families to travel, camp, and explore various destinations. Here's a detailed description of caravans:            </p>
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

export default Caravans;
