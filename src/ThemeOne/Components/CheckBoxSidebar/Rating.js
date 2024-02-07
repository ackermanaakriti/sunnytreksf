import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './Checksidebar.scss'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Ratingg = () => {
    const [ratingvisible, setratingVisible] = useState(false);

    const handleRate = () => {
        setratingVisible(!ratingvisible);
      };
  return (
   <>
   <div className='rating--container'>
   <div className="checkbox--header">       <p>
          Rating
          <span>
          <FontAwesomeIcon
            onClick={handleRate}
            style={{ fontSize: "13px",color:'#0E6097' }}
            icon={faChevronDown}
          />
          </span>
          </p></div>

          {ratingvisible&& (
            <div className='ratinggg--container'>
                <div className='rating--icon--container'>

                  <Rating name="size-medium" defaultValue={2} />
                  <p>Clear Filter</p>
                  </div>
                  
          <div className='daysrange--container'>
            
            <p>Days Range</p>
            <div className='daysss'>

         
          <div className='daysrange--input'>
            <label>Min Days</label>
            <input type='number'/>
          </div>
          <div className='daysrange--input'>
            <label>Max Days</label>
            <input type='number'/>
          </div>
        </div>
        </div>
              
          </div>
          )}

        
        
    </div></>
  )
}

export default Ratingg