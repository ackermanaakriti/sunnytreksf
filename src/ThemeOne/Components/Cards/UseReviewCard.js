import React from 'react'
import img from '../../../Images/review.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const UseReviewCard = () => {
  return (
    <>
    <div className='userreviewcard--container'>
        <div className='userreview--img'>
            <img src={img}/>
        </div>
        <div className='userreview--content'>
        <Rating name="size-medium" defaultValue={2}  />
        <h1> JOHN DOE</h1>
        <h4>TRAVELLED DECEMBER 2023</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className='datereport'>Report Submitted 07 Jan 2024</p>
        </div>
    </div>
    </>
  )
}

export default UseReviewCard