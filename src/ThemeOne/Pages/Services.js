import React from 'react'
import LayOutone from '../LayOutone'
import { Container } from '@mui/material'
import './Pages.scss'
import { ourteam } from '../Data/Ourteamm'
import OurServicesCard from '../Components/Cards/OurServicesCard'

const Services = () => {
  return (
   <>
   <LayOutone>
   <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1> Our Services</h1>
      
    </div>
    </Container>
    </div>
    <Container maxWidth='xl'>
    <div className='ourservices--content--wrapper'>
        <div className='ourservices--description'>
            <p>At Sunny Travels, we're dedicated to curating unique and exhilarating activities that showcase the beauty and diversity of Nepal.
                 Our expertly crafted itineraries combine outdoor exploration with authentic cultural immersion, ensuring that every moment of your journey is filled with wonder and discovery.</p>

        </div>

        <div className='ourservices--card--wrapper'>
            {ourteam.map((item)=>
            (
              <OurServicesCard/>  
            ))}

        </div>
    </div>
    </Container>


 

   </LayOutone>

   </>
  )
}

export default Services