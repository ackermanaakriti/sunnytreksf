import { Container } from '@mui/material'
import React from 'react'
import OurTrendingPackageCard from '../Cards/OurTrendingPackCard'
import './section.scss'
import { trendingPacData } from '../../Data/TrndingPackageData'

const OurTrendingpack = () => {
  return (
   <>
   <div className='ourtrendingpac--wrapper'>
    <Container>
        <h1 className='section--header'> Our Trending Packages</h1>
        <div className='ourtrendingpac--container'>
            {trendingPacData.map((item)=>
            (
                <OurTrendingPackageCard/>
            ))}
        </div>
        <div className='ourtrendingpac--container'>
            {trendingPacData.map((item)=>
            (
                <OurTrendingPackageCard/>
            ))}
        </div>
    </Container>
   </div>
   </>
  )
}

export default OurTrendingpack