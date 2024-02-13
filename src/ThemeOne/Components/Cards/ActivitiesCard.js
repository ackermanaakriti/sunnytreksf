import React from 'react'
import img from '../../../Images/pokhara.png'
import './Cards.scss'
import './cardresponsive.scss'

const ActivitiesCard = () => {
  return (
    <>
    <div className='activitiescard--container'>
        <img src={img} alt='\'/>
        <div className='activities--sticker'>
            <p className='ll'>Sunrise View   </p>
            <p className='lo'>Pokhara</p>
          
        </div>
    </div>
    </>
  )
}

export default ActivitiesCard