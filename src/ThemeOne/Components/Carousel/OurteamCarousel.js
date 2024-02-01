import React,{useState,useRef,useEffect} from 'react'
import { ourteam } from '../../Data/Ourteamm'
import img from '../../../Images/myaan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@mui/material';


const OurteamCarousel = () => {
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
      handleResize(); 
  
     
      window.addEventListener('resize', handleResize);
  
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  return (
  <>
  <Container>
  <div className='ourteamcarousel--container'>
  <div className='btn--container--ourteam'>
      <button className="button-prev" onClick={scrollLeft}>
      <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowLeft} />
      </button>
      <button className="button-next" onClick={scrollRight}>
      <FontAwesomeIcon style={{color:'#0E6097'}} icon={faArrowRight} />
      </button>
      </div>
   
      <div ref={cardRef} className="carousel--card--container">
        {ourteam.map((item, index) => (
         <div className='ourteamcard'>
         <img src={img}/>
         <div className='ourteam--content'>
             <p className='nameee'>John Doe</p>
             <p className='work'>Travel Consultant</p>
     
         </div>
        </div>
        ))}
        </div>
  </div>
  </Container>

  </>
  )
}

export default OurteamCarousel