import React from 'react'

import './singlepage.scss'
import RecommendedDivs from './RecommendedDivs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MainButton from '../Buttons/MainButton';
import FeaturedDestination from './Featured&Destination';

const Inquiry = () => {
  return (
   <>
   <div className='inquiry--container'>
    <div className='lllll'>
    <RecommendedDivs value={'Book Now'}/> 
    </div>
    <div className='inquiry--div'><p>Make an Inquiry</p></div>
    <form>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Name'/> <span> <FontAwesomeIcon icon={faUser} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Email'/> <span> <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Phone No'/> <span> <FontAwesomeIcon icon={faPhone} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <textarea rows={3} cols={10}  placeholder='Message'></textarea>
      </div>

      <MainButton value='Submit'/>
       
      
    </form>
    <FeaturedDestination/>
 
   </div>
   </>
  )
}

export default Inquiry