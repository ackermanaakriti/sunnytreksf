import React from 'react'
import LayOutone from '../LayOutone'
import { Container,Grid } from '@mui/material'
import Checkboxs from '../Components/CheckBoxSidebar/Checkbox'
import ShortDetailTrip from '../Components/Sections/itinerarydetails/ShortDetailTrip'
import OverviewItinerary from '../Components/Sections/itinerarydetails/OverviewItinerary'
import Roadmap from '../Components/Sections/itinerarydetails/Roadmap'
import Itinerary from '../Components/Sections/itinerarydetails/Itinerary'
import Essentialinfo from '../Components/Sections/itinerarydetails/Essentialinfo'
import Itinerarybar from '../Components/Sections/itinerarydetails/Itinerarybar'
const DetailIterenary = () => {
  return (
  <>
  <LayOutone>
  <div className='contactus--container'>
   <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1>Mount Everest </h1>
    </div>
    
    </Container>

  </div>
  </div>
  <Itinerarybar/>
  <Container maxWidth='xl'>
  <div className='checkbox--content--container'>
    <Grid container>
      <Grid xs={3}>
      <Checkboxs/>
      </Grid>
    <Grid xs={9}>
    <div className='tripdetail--components'>
    <ShortDetailTrip/>
    <OverviewItinerary/>
    <Roadmap/>
    <Itinerary/>
    <Essentialinfo/>
    </div>
    </Grid>
   
    </Grid>
  
   
  
    
  </div>
  </Container>
  </LayOutone>
  </>
  )
}

export default DetailIterenary