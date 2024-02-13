import React from 'react'
import img from '../../../Images/Rectangle 130.png'
import './Cards.scss'

const MajesticPeaksCard = () => {
  return (
   <>
   <div className='ccc'>
   <div className='majestipeakscard--container'>
    <img src={img} alt='category'/>
    <div className='majesticpeak--overlay'></div>
      <div div className='titlemajesticpeaks'> <p >Jungle Safari</p></div>

   
    </div>
    <div className='majestic--description'>
        <p>Browse our example trips and get in contact
to start planning your very own advanture.</p>
    </div>
  
   </div>
   </>
  )
}

export default MajesticPeaksCard