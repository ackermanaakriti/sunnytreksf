import React from 'react'
import TopVacDestiCard from '../Cards/TopVacDestiCard'
import { Container,Grid } from '@mui/material'
import TopVacDestiCarousel from '../Carousel/TopVacDestiCarousel'
import './section.scss'
import MainButton from '../Buttons/MainButton'

const TopVacDestination = () => {
  return (
    <>
    <div className='topvacdestination--wrapper'>
        <Container maxWidth='xl'>
          <h1 className='section--header'>Top Vacation Destinations</h1>
            <div className='topvacdestination--container'>
            <TopVacDestiCarousel/>
            </div>
            <div className='topcar--btnn'>
            <MainButton value='Explore More'/>
            </div>
           
        </Container>
    </div>
    </>
  )
}

export default TopVacDestination