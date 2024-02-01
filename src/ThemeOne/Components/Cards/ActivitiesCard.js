import React from 'react'
import img from '../../../Images/pokhara.png'

const ActivitiesCard = () => {
  return (
    <>
    <div className='activitiescard--container'>
        <img src={img} alt='\'/>
        <div className='activities--sticker'>
            <p>Sunrise View</p>
        </div>
    </div>
    </>
  )
}

export default ActivitiesCard