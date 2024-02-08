import { Container } from '@mui/material'
import React from 'react'
import './section.scss'
import SearchDestinatio from './SearchDestinatio'

const Heropagesection = () => {
  console.log(window.innerWidth)
  const root = document.documentElement;
  const mainColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
  console.log(mainColor,"hello")
  return (
    <>
    <div className='heropagesection--wrapper'>
      <div className='heropage--overlay'></div>
        <Container maxWidth='xl'>
            <div className='heropage--content'>
                <h1>Your Friend For <span>Travelling</span></h1>
                <p>Welcome to our cozy cabin nestled in the heart of the mountains!
Our cabin is the perfect getaway for
those seeking peace and relaxation in a natural environment.</p>
            </div>
          
        </Container>
        
  
      
    </div>
    <SearchDestinatio/>
  
    </>
  )
}

export default Heropagesection