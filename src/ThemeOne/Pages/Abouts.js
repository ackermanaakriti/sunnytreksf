import React from 'react'
import LayOutone from '../LayOutone'
import { Container, Grid } from '@mui/material'
import FirseSection from '../Components/Sections/aboutussection/FirseSection'
import OurteamCarousel from '../Components/Carousel/OurteamCarousel'
import './Pages.scss'

const Abouts = () => {
  return (
   <>
   <LayOutone>
   <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1>About Us</h1>
    </div>
    </Container>
   
  </div>
  <FirseSection/>
  <h1 className='section--header'> Our Team</h1>
  <OurteamCarousel/>
  <div className='ourdiares--section'>
  <h1 className='section--header'> Travel Diaries</h1>
 </div>

   </LayOutone>
   </>
  )
}

export default Abouts