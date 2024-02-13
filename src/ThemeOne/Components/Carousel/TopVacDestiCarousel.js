// import React, { useRef, useState,useEffect } from 'react';
// import './Carousel.scss';
// import img from '../../../Images/Rectangle 115.png';
// import Slider from "react-slick";

// import img2 from '../../../Images/sarangkot.png';

// import { tvdata } from '../../Data/TopVacDestination';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const TopVacDestiCarousel = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div >
//        {/* <div className='btn--container'>
//       <button className="button-prev" onClick={scrollLeft}>
//       <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowLeft} />
//       </button>
//       <button className="button-next" onClick={scrollRight}>
//       <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowRight} />
//       </button>
//       </div> */}
//        <Slider {...settings}>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//       <div>
//       <div  className="tdcard--container" >
//           <div  className="tdcard--item">
//             <img src={img} />
//             <div className="tdcard--content">
//               <p>Pokhara,Nepal</p>
//             </div>
//           </div>
//           </div>
//       </div>
//     </Slider>
     
    

       
      

     
//     </div>
//   );
// };

// export default TopVacDestiCarousel;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../../Images/Rectangle 115.png';
import img2 from '../../../Images/sarangkot.png';
import img3 from '../../../Images/Rectangle 118.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft} from "@fortawesome/free-solid-svg-icons";


import './Carousel.scss'


const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-prev-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowLeft} /></span></div>;
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-next-arrow" onClick={onClick}><span><FontAwesomeIcon icon={faArrowRight} /></span></div>;
};
export default function TopVacDestiCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
     
     <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">       
               <img src={img} />
               <div className="td--overlay">
         <div className="tdcard--content">
         <p>Sarangkot Pokhara</p>
         </div>
         </div>
           </div>
      </div>
      </div>
      <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">       
               <img src={img3} />
               <div className="td--overlay">
         <div className="tdcard--content">
         <p>Sarangkot Pokhara</p>
         </div>
         </div>
           </div>
      </div>
      </div>
      <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">       
               <img src={img2} />
               <div className="td--overlay">
         <div className="tdcard--content">
         <p>Sarangkot Pokhara</p>
         </div>
         </div>
           </div>
      </div>
      </div>
      <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">       
               <img src={img2} />
               <div className="td--overlay">
         <div className="tdcard--content">
         <p>Sarangkot Pokhara</p>
         </div>
         </div>
           </div>
      </div>
      </div>
     
      <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">         
             <img src={img} />
         <div className="tdcard--content">
         <p>Pokhara,Nepal</p>
         </div>
           </div>
      </div>
      </div>
      <div>
      <div  className="tdcard--container" >
         <div  className="tdcard--item">        
              <img src={img} />
         <div className="tdcard--content">
         <p>Pokhara,Nepal</p>
         </div>
           </div>
      </div>
      </div>
      
    </Slider>
  );
}
