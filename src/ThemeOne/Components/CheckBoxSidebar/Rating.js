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
    <div className='rating--header'>
      <p className='pheader--rating'>Rating</p>
      <span>
      <Rating name="size-medium" defaultValue={2} />
      </span>
   
      <p>Clear Filter</p>

    </div>
   </div>

   <div className='Daysrange--container'>
    <p className='pheader--rating'>Days Range</p>
    <form className='dayrange--form'>
      <div>
        <label>Min Days</label>
        <input></input>
      </div>
      <div>
        <label>Min Days</label>
        <input></input>
      </div>
    </form>
   </div>
  </>
  )
}

export default Ratingg