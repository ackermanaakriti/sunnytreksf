import React from 'react'
import LayOutone from '../LayOutone'
import { Container, Grid } from '@mui/material'
import FirseSection from '../Components/Sections/aboutussection/FirseSection'
import OurteamCarousel from '../Components/Carousel/OurteamCarousel'

const Abouts = () => {
  return (
   <>
   <LayOutone>
   <div className='pages--wrapper'>
    <Container>
    <div className='pages--header'>
        <h1>About Us</h1>
    </div>
    </Container>
   
  </div>
  <FirseSection/>
  <OurteamCarousel/>
   </LayOutone>
   </>
  )
}

export default Abouts