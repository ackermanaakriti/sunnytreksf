import { Container,Grid } from '@mui/material'
import React from 'react'
import './section.scss'
import MajesticPeaksCard from '../Cards/MajesticPeaksCard'
import { category } from '../../Data/Categories'
import img from '../../../Images/Rectangle 130.png'

const MajesticPeaks = () => {
  return (
   <>
   <div className='majesticpeaks--wrapper'>
    <Container>
        <div className='section--header--container'>        <h1 className='section--header'>Majestic Peaks,Safaris & More Categories</h1>
</div>
        <div className='majesticpeaks--container'>
  
          
                <div className='majestic--card--wrapper' >
                {category.map((item) => (
                  <div className="majesticpeaks--card">
                    <div className="majesticpeaks--card--img">
                      <img src={img} alt="" />
                      <div className='majestic--overlay'> </div>
                    </div>
                    <p className='majestic--title' >{item.categoryname}</p>
                    <div className="majesticpeaks--card--content">
                      <p> {item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
     
         
        </div>
    </Container>
   </div>
   </>
  )
}

export default MajesticPeaks