import { Container } from '@mui/material'
import React from 'react'
import OurTrendingPackageCard from '../Cards/OurTrendingPackCard'
import './section.scss'
import { trendingPacData } from '../../Data/TrndingPackageData'
import MainButton from '../Buttons/MainButton'

const OurTrendingpack = () => {
  return (
   <>
   <div className='section--wrapper'>
    <Container maxWidth='xl'>
        <h1 className='section--header'> Our Trending Packages</h1>
        <div className='section--container'>
            <div className='ourtrendingpackage--card'>
            {trendingPacData.map((item)=>
            (
                <OurTrendingPackageCard/>
            ))}
        </div>
        
        </div>
        <div className='topcar--btnn'>
            <MainButton value='Explore More'/>
            </div>
    </Container>
   </div>
   </>
  )
}

export default OurTrendingpack