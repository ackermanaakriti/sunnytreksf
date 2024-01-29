import React, { useRef, useState,useEffect } from 'react';
import './Carousel.scss';
import img from '../../../Images/Rectangle 115.png';
import { tvdata } from '../../Data/TopVacDestination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopVacDestiCarousel = () => {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const handleResize = () => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.firstElementChild.clientWidth);
    }
  };

  const scrollLeft = () => {
    cardRef.current.scrollLeft -= cardWidth;
  };

  const scrollRight = () => {
    cardRef.current.scrollLeft += cardWidth;
  };

  
  useEffect(() => {
    handleResize(); // Set initial width

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div >
     
    

       <div className='carousel--wrappper-tvd'  >
       <div className='btn--container'>
      <button className="button-prev" onClick={scrollLeft}>
      <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowLeft} />
      </button>
      <button className="button-next" onClick={scrollRight}>
      <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowRight} />
      </button>
      </div>
      <div ref={cardRef} className="carousel--card--container">
        {tvdata.map((item, index) => (
            <div  className="tdcard--container" >
          <div key={index} className="tdcard--item">
            <img src={img} alt={`card-img-${index}`} />
            <div className="tdcard--content">
              <p>{item.placename}</p>
            </div>
          </div>
          </div>
      
        ))}
        </div>
          
          </div>
       
      

     
    </div>
  );
};

export default TopVacDestiCarousel;
