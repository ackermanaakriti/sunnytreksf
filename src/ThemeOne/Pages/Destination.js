import React from 'react'
import LayOutone from '../LayOutone'
import DestinationCard from '../Components/Cards/DestinationCard'
import './Pages.scss'
import Region from '../Components/CheckBoxSidebar/Region'
import Checkboxs from '../Components/CheckBoxSidebar/Checkbox'
import { Container } from '@mui/material'
import CardTable from '../Components/Pagination/Pagination'

const Destination = () => {
  return (
   <>
   <LayOutone>
  <div className='pages--wrapper'>
    <Container>
    <div className='pages--header'>
        <h1>Destinations</h1>
    </div>
    </Container>
  </div>
  <Container>
  <div className='checkbox--content--container'>
   
    <Checkboxs/>
  
    <CardTable/>
  </div>
  </Container>
   
   </LayOutone>
   </>
  )
}

export default Destination