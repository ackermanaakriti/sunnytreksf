import React from 'react'
import LayOutone from '../LayOutone'
import { Container } from '@mui/material'
import Bookingform from '../Components/Forms/Bookingform'
const Book = () => {
  return (
    <LayOutone>
         <div className='contactus--container'>
   <div className='pages--wrapper'>
    <Container>
    <div className='pages--header'>
        <h1> Our Adventure</h1>
    </div>
    </Container>
  </div>
  </div>
  <div>
    
      <Bookingform/>
  
  </div>
    </LayOutone>
  )
}

export default Book