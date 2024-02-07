import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Container,Grid } from '@mui/material'
import img from '../../../../Images/groupphoto.png'
import './itinerarydetails.scss'

const Itinerarybar = ({activeSection}) => {
  return (
    <>
    <div className='itinerarybar'>
    <div className='itineraybar--b'>
        <Container maxWidth='xl'>
            <Grid container>
                <Grid xs={2}>
                    <div className='itinerarybar--icons'>
                    <FontAwesomeIcon style={{color:'#FFAB2D',fontSize:'20px'}} icon={faStar} />
                    <p>Overview</p>
                    </div>
                </Grid>
                <Grid xs={3}>
                <div className='itinerarybar--icons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>24/7 Support</p>
                    </div>
                </Grid>
                <Grid xs={3}>
                <div className='itinerarybar--icons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>Local Expertise</p>
                    </div>
                </Grid>
                <Grid xs={4}>
                <div className='itinerarybar--icons'>
                <FontAwesomeIcon  style={{color:'#FFAB2D',fontSize:'20px'}} icon={faCircleCheck} />
                    <p>Responsive Customer Support</p>
                    </div>
                </Grid>
          </Grid>
         
     </Container>
    </div>
    </div>
    </>
  )
}

export default Itinerarybar