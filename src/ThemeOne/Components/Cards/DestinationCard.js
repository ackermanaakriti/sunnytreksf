import React from 'react'
import img from '../../../Images/pokhara.png'
import './Cards.scss'

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
        <p>(1 review)</p>
     </div>
    </div>
    </div>
    </>
  )
}

export default DestinationCard