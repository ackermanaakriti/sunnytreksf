import React from 'react'
import TopVacDestiCard from '../Cards/TopVacDestiCard'
import { Container,Grid } from '@mui/material'
import TopVacDestiCarousel from '../Carousel/TopVacDestiCarousel'

const TopVacDestination = () => {
  return (
    <>
    <div className='topvacdestination--wrapper'>
        <Container>
            <div className='topvacdestination--container'>
            <TopVacDestiCarousel/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default TopVacDestination