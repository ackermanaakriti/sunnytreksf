import { Grid } from '@mui/material'
import React from 'react'
import img from '../../../../Images/line.png'
import peak from '../../../../Images/peak.png'
import mountain from '../../../../Images/moutain.png'
import './itinerarydetails.scss'
import map from '../../../../Images/everestmap.png'

const Roadmap = () => {
  return (
    <>
    <div >
    <div className='itinaarydetail--container'>
        <h2>Roadmap</h2>
    </div>
    <div className='roadmap--container'>
        <Grid container>
     <Grid xs={3}>
        <div className='symbolmap'>
            <div >
                <span>
                    <img src={img}/>
                </span>
                <p>Secondary Route</p>
            </div>
        </div>
        <div className='symbolmap'>
            <div >
                <span>
                    <img src={peak}/>
                </span>
                <p>Peak</p>
            </div>
        </div>
        <div className='symbolmap'>
            <div >
                <span>
                    <img src={mountain}/>
                </span>
                <p>Mountain</p>
            </div>
        </div>
     </Grid>
     <Grid xs={2}></Grid>
     <Grid xs={7}>
        <div className='roadmap--wrapper'>
            <img src={map}/>
        </div>
     </Grid>
    </Grid>    </div>
    </div>
    </>
  )
}

export default Roadmap