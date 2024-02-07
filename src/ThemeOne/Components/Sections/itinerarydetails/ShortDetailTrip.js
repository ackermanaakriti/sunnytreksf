import React from 'react'
import './itinerarydetails.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import { shorttripdetail } from '../../../Data/TripShortDetail';
const ShortDetailTrip = () => {
  return (
   <>
   <div className='shortdetailtrip--container'>
    <div className='shortdetailtrip--wrapper'>

         { shorttripdetail?.map((item)=>
         (  <div className='kjkj'> 
            <div className='shrtdetail'>
            <span><FontAwesomeIcon icon={faCalendar}/></span>
            <div className='shrtdetail--content'>
                <p >{item.header}</p>
                <p className='secnd-p'>{item.subheader}</p>
            </div>

        </div>
        </div>

         ))}
       
    </div>
   </div>
   </>
  )
}

export default ShortDetailTrip