import React from 'react'
import img from '../../../Images/pokhara.png'
import './Cards.scss'
import MainButton from '../Buttons/MainButton'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const DestinationCard = ({props}) => {
  return (
    <>
    <div className='destinationcard--container'>
      <div className='dest-wrap'>
     <div className='destinationcard--img'>
        <img src={img} alt=''/>
     </div>
     <div className='sticker'>Trending</div>
     <div className='destinationcard--content'>
        <h1>Mountain Base Camp</h1>
        <div className='destinationcard--subcontent'>
          <div>
          <Rating name="size-medium" defaultValue={2} />
        <p>(1 review)</p>
          </div>
     
        <MainButton value='View Details'/>
        </div>
      
     </div>
    </div>
    </div>
    </>
  )
}

export default DestinationCard