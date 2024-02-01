import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Container,Grid } from '@mui/material'
import img from '../../../../Images/groupphoto.png'
import './aboutussection.scss'
const FirseSection = () => {
  return (
    <>
    
     <div className='aboutus--b'>
        <Container>
            <Grid container>
                <Grid xs={2}>
                    <div className='aboutsicons'>
                    <FontAwesomeIcon style={{color:'#FFAB2D',fontSize:'20px'}} icon={faStar} />
                    <p>4.4 rated</p>
                    </div>
                </Grid>
                <Grid xs={3}>
                <div className='aboutsicons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>24/7 Support</p>
                    </div>
                </Grid>
                <Grid xs={3}>
                <div className='aboutsicons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>Local Expertise</p>
                    </div>
                </Grid>
                <Grid xs={4}>
                <div className='aboutsicons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>Responsive Customer Support</p>
                    </div>
                </Grid>
          </Grid>
         
     </Container>
    </div>
    <div className='seccnd--div '>
        <Container>
          <Grid container>
            <Grid xs={5}>
                <div className='aboutus---img'>
                    <img src={img}/>
                </div>
            </Grid>
            <Grid xs={7}>
                <div className='aboutus--content'>
                    <h1>
                    Welcome to <br></br>
                    Sunny Holidays Nepal
                    </h1>
                    <p>
                    Trek through the Himalayas to the legendary Mount Everest Base Camp, where you'll follow in the footsteps of mountaineers amidst breathtaking scenery. Begin your journey in Kathmandu before flying to Lukla to start the trek. Pass through Sherpa villages and rhododendron forests, acclimatizing as you ascend. Reach iconic landmarks like Namche Bazaar and Tengboche Monastery before arriving at Everest Base Camp, a pinnacle of achievement. Stand in awe of Everest's towering summit and hike to Kala Patthar for sunrise views. This transformative adventure offers unforgettable memories and a newfound appreciation for the majestic Himalayas.

                    </p>
                </div>
            </Grid>
            </Grid>
            </Container> </div>  
             
    </>
  )
}

export default FirseSection