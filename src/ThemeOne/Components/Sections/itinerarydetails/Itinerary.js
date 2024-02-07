import React from 'react'
import img from '../../../../Images/landing 1.png'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { itinerary } from '../../../Data/Itinerary';

const Itinerary = () => {
  return (
    <>
    <div className='itinerary--container'>
        <div className='itinaarydetail--container'>
            <h2>Itinerary</h2>
        </div>
        <div className='itinerary--list'>
        {itinerary.map((item)=>
                (
                    <div className='itinerary--lists'>
              
                    <div className='itinerary--img'>
                        <img src={img} />
                    </div>
    
                    <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className='itinerary--p'
              sx={{color:'blue'}}
            >
            Day 1: Arrival in Kathmandu
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
                    
                </div>
                ))}
          
        </div>
    

     
    </div>
    </>
  )
}

export default Itinerary