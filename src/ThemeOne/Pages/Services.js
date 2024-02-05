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

 

   </LayOutone>

   </>
  )
}

export default Services