import { Container,Grid } from '@mui/material'
import React from 'react'
import './section.scss'
import MajesticPeaksCard from '../Cards/MajesticPeaksCard'
import { category } from '../../Data/Categories'
import img from '../../../Images/Rectangle 130.png'
import MainButton from '../Buttons/MainButton'

const MajesticPeaks = () => {
  return (
   <>
   <div className='majesticpeaks--wrapper'>
    <Container maxWidth='xl'>
        <div className='majestic--header--container'>        <h1 className='section--header'>Majestic Peaks, <br></br>Safaris & More <br></br> Categories</h1>
</div>
        <div className='majesticpeaks--container'>
  
          
                <div className='majestic--card--wrapper' >
                {category.map((item) => (
                  <div className="majesticpeaks--card">
                    <div className="majesticpeaks--card--img">
                      <img src={img} alt="" />
                      <div className='majestic--overlay'> </div>
                      <div className='majestic--title'>  <p  >{item.categoryname}</p></div>
                     
                    </div>
                  
                    <div className="majesticpeaks--card--content">
                      <p> {item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='majestic--btnn'>
            <MainButton value='Explore More'/>
            </div>
           
              
     
         
        </div>
    </Container>
   </div>
   </>
  )
}

export default MajesticPeaks