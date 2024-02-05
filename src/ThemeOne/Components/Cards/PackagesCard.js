import React from 'react'
import MainButton from '../Buttons/MainButton'
import img from '../../../Images/Mask group.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

const PackagesCard = () => {
  return (
   <div className='packagesCard--container'>
    <div className='kkk'>
    <div className='packagescard-img'>
        <img src={img}/>
    </div>
    <div className='packagescard--content'>
        <h2> Mount Everest Base Camp</h2>
        <div className='iconsp'>
        <FontAwesomeIcon icon={faCalendar} style={{color:'#0E6097'}}/>   <p>20 Days 19 nights</p>
        </div>
        <div className='iconsp'>
        <FontAwesomeIcon icon={faLocationDot} style={{color:'#0E6097'}}/>   <p>kilimanzaro , Tanzania</p>
        </div>
        <div className='iconsp'>
        <FontAwesomeIcon icon={faMountainSun} style={{color:'#0E6097'}}/>   <p>Trekking</p>
        </div>
        
       
    </div>
    <div className='packagescard--buton'>
        <MainButton value='Explore'/>
        <p>Rs 2,999 <br></br> per person</p>
    </div>
    </div>
   </div>
  )
}

export default PackagesCard