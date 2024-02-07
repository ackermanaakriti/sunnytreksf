import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons'
import './itinerarydetails.scss'
import { equipment } from '../../../Data/Itinerary'

const Essentialinfo = () => {
  return (
    <>
    <div className='itinaarydetail--container'>
            <h2>Essential Info</h2>
            <p className='equipment--p-subheader'>Equipment & Gear</p>
        </div>
        <div className='equipment--lists'>
            {
                equipment.map((item)=>
                (
                    <div className='equipments'>
                    <span> <FontAwesomeIcon icon={faHatCowboySide} /></span>
                    <p>Moisture-wicking base layers</p>
                </div>
                ))
            }
        
        </div>
    </>
  )
}

export default Essentialinfo