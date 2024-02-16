import React from 'react';
import { Link } from 'react-router-dom';
import Mycarousel from './mycarousel';
import Accordian from './accordian';
import Type from '../images/container type.png';
import Size from '../images/container-size.png';
import Payment from '../images/payment.png';
import Security from '../images/safety.png';
import homeaboutimage from '../images/homeaboutimage.png';
import dot from '../images/dot.png';
import fluid from '../images/container-tudo-sobre-wilson-scaled.jpeg';
import containerHOuse from '../images/luxury-container.webp';
import Motothomes from '../images/Luxury-Class-A-Motorhomes.jpg';
import Caravans from '../images/Luxury Caravans.jpg';
import Office from '../images/office-con.jpg';
import Containers from '../images/Customized Container Offices.jpg';

const containers = [
  {
    imageUrl: Motothomes,
    title: 'Motor Homes',
    para: "Embark on a journey of comfort and adventure with our range of motor homes. Designed for those who seek the freedom of the open road without compromising on comfort, our motor homes combine functionality with style, providing a home away from home.",
    para1: "A motor home, also commonly referred to as an RV (recreational vehicle), is a versatile and self-contained mobile dwelling designed for travel, adventure, and temporary living. These vehicles combine the convenience of a home with the freedom of the open road, providing a unique lifestyle for those who seek mobility and comfort simultaneously. Here's a detailed description of motor homes",
    path:"/products/motor"
  },

  {
    imageUrl: Caravans,
    title: 'Caravans',
    para: "Experience the joy of mobile living with our diverse range of caravans. From compact and efficient models to spacious and luxurious options, our caravans cater to different preferences and travel styles. Enjoy the flexibility to travel at your own pace and create memorable experiences on the road.",
    para1: "Caravans, commonly known as travel trailers or camper trailers, are a popular and versatile form of mobile accommodation designed to bring the comforts of home to the great outdoors. These towable living spaces provide a flexible and convenient way for individuals and families to travel, camp, and explore various destinations. Here's a detailed description of caravans:",
    path:"/products/caravans"
  },

  {
    imageUrl: Office,
    title: 'Container Offices',
    para: "Redefine your workspace with our innovative container offices. Offering a blend of functionality and aesthetics, our container offices provide a versatile solution for businesses seeking cost-effective and customizable office spaces. Tailor the design to meet your specific requirements and enhance productivity.",
    para1: "Office containers, also known as mobile office containers or container offices, are versatile and modular structures that provide a flexible and convenient solution for temporary office space needs. These containers are often repurposed from standard shipping containers, offering a cost-effective and sustainable alternative to traditional brick-and-mortar office spaces.",
    path:"/products/office"
  },

  {
    imageUrl: Containers,
    title: 'Containers',
    para: "Containers, in the context of your inquiry, typically refer to shipping containers or storage containers. These large, standardized steel boxes are widely used for the transportation and storage of goods around the world. Here's a detailed description",
    para1: "Our open top containers are ideal for goods such as heavy machinery, pipes, and logs that require top loading or need to be loaded with a crane. Our containers are constructed with durable materials and have reinforced corner castings for added strength.",
    path:"/products/containers"
  },


];


const Home = () => {
  return (
    <>
      <Mycarousel />
      <div className="container-lg">
        <div className='wrapper-card'>
          <div className='wrapper-image'>
            <img src={Size} alt="" />
          </div>
          <h5>Container Size</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        </div>
        <div className='wrapper-card'>
          <div className='wrapper-image'>
            <img src={Type} alt="" />
          </div>
          <h5>Container Type</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        </div>
        <div className='wrapper-card'>
          <div className='wrapper-image'>
            <img src={Payment} alt="" />
          </div>
          <h5>Payment</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        </div>
        <div className='wrapper-card'>
          <div className='wrapper-image'>
            <img src={Security} alt="" />
          </div>
          <h5>Safety</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        </div>


      </div>

      <div className='home-about'>
        <div className='home-about-image'>
          <img src={homeaboutimage} alt="" />
        </div>
        <div className='home-about-details'>
          <div className='line'>
            <div id='line'></div>
            <h5>About our Company</h5>
          </div>
          <h2>
            Star Link Trading
          </h2>
          <p>
            Distinctively exploit optimal alignments for intuitive business applications through revolutionary catalysts for chang the Seamlessly optimal optimal alignments for intuitive.
          </p>
          <div className='service-dots'>
            <div className='dot-details'>
              <div className='dot'>
                <img src={dot} alt="" />
              </div>
              <div className='details'>Quick Delivery Service</div>
            </div>
            <div className='dot-details'>
              <div className='dot'>
                <img src={dot} alt="" />
              </div>
              <div className='details'>Low Delivery Charge</div>
            </div>
            <div className='dot-details'>
              <div className='dot'>
                <img src={dot} alt="" />
              </div>
              <div className='details'>Safe & Secure Movement</div>
            </div>
            <div className='dot-details'>
              <div className='dot'>
                <img src={dot} alt="" />
              </div>
              <div className='details'>Safe & Secure Movement</div>
            </div>
            <div className='dot-details'>
              <div className='dot'>
                <img src={dot} alt="" />
              </div>
              <div className='details'>Quick Delivery Service</div>
            </div>
          </div>

          <div className='about-us-btn'>
            <button>More</button>
          </div>

        </div>
      </div>

      <div className="container-fluid">
        <img src={fluid} alt="" />
        <div className='overlay'></div>

        <div className='company-promo'>
          <h2>1000+</h2>
          <h6>Happy Customers</h6>
        </div>

        <div className='company-promo'>
          <h2>12+</h2>
          <h6>Years</h6>
        </div>

        <div className='company-promo'>
          <h2>24</h2>
          <h6>Countries</h6>
        </div>

      </div>

      <div className="container">
        <div className="container-image">
          <img src={containerHOuse} alt="" />
        </div>
        <div className='home-about-details'>
          <div className='line'>
            <div id='line'></div>
            <h5>Featured</h5>
          </div>
          <h2>
            Best Containers & Its View
          </h2>
          <p>
            Distinctively exploit optimal alignments for intuitive business applications through revolutionary catalysts for chang the Seamlessly optimal optimal alignments for intuitive.
          </p>
          <Accordian />
        </div>
      </div>

      <div className="best-deal">
        <div className='line-deal'>
          <div id='white-line'></div>
          <h6>Best Deal</h6>
        </div>
        <h2>Find Your Best Deal Right Now!</h2>
      </div>

      <div className="container">
        <div className='zero'>
          {containers.map((data, index) => (
            <div className={`container-sec ${index % 2 === 0 ? 'even-index' : ''}`} key={index}>
              <div className='container-section-images'>
                <img src={data.imageUrl} alt="" />
              </div>
              <div className='container-section-details'>
                <h3>{data.title}</h3>
                {/* <p>{data.para}</p> */}
                <p>{data.para1}</p>
                <Link to={data.path}>
                <button>Know More</button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Home;
