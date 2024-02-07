import React from 'react'
import Region from './Region'
import Rating from './Rating'
import MainButton from '../Buttons/MainButton'

const Checkboxs = () => {
  return (
  <>
  <div className='checkbox--container'>
    <Region/>
    <Rating/>
    <div className='butons'>
      <MainButton value='Submit'/>
      <p>Clear Filter</p>
    </div>
  </div>
  </>
  )
}

export default Checkboxs