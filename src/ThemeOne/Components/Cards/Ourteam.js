import React from 'react'
import img from '../../../Images/myaan.png'

const Ourteam = () => {
  return (
   <>
   <div className='ourteamcard'>
    <img src={img}/>
    <div className='ourteam--content'>
        <p className='nameee'>John Doe</p>
        <p className='work'>Travel Consultant</p>

    </div>
   </div>
   </>
  )
}

export default Ourteam