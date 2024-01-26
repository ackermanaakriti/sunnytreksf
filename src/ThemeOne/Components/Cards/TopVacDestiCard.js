import React from 'react'
import './Cards.scss'
import img from '../../../Images/Rectangle 115.png'


const TopVacDestiCard = () => {
  return (
   <>
   <div className='tdcard--container'>
   <img src={img} alt='card-img'/>
     <div className='tdcard--content'>
       
        <p> Pokhara Nepal</p>
     </div>
   </div>
   </>
  )
}

export default TopVacDestiCard