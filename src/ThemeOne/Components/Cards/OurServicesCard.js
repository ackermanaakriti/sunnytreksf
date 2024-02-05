import React from 'react'
import img from '../../../Images/boxes 1.png'
import './Cards.scss'
const OurServicesCard = () => {
  return (
   <>
   <div className='ourservicescard--container'>
    <div className='ourservicescard--content'>
        <img src={img} alt=''/>
        <h1>Tour Packages</h1>
        <p>Offering pre-designed tour packages to popular destinations worldwide,
         including accommodations, transportation, guided tours, and activities.</p>
    </div>
   </div>
   </>
  )
}

export default OurServicesCard