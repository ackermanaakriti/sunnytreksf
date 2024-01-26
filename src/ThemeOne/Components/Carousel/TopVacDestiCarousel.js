import React, { useRef, useState ,useEffect} from 'react';
import TopVacDestiCard from '../Cards/TopVacDestiCard';
import { tvdata } from '../../Data/TopVacDestination';
import img from '../../../Images/Rectangle 115.png'
import './Carousel.scss'


const TopVacDestiCarousel = ({ items }) => {
    const cardref = useRef(null)
    const [Cwidth,setCardWidth]= useState(null)
    

    useEffect(() => {
        if (cardref.current) {
          // Access the offsetWidth property of the element
          const width = cardref.current.offsetWidth;
          setCardWidth(width);
         console.log(width)
        }
      }, []);
      

      
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {

    cardref.scrollLeft= cardref.scrollLeft + Cwidth;
   
  };

  const prevItem = () => {
    cardref.scrollLeft= cardref.scrollLeft - Cwidth;
  };

  return (
    <>
    
   
    
    <div  className='carousel--card--container'>
        <div   className='cddd'>
          <TopVacDestiCard />
          <TopVacDestiCard/>
          <TopVacDestiCard/>
         
        </div>
        <button onClick={prevItem}>Next</button>
    <button onClick={nextItem}>Next</button>
    </div>
      
   
    </>
  );
};

export default TopVacDestiCarousel;
