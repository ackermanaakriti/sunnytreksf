import React from 'react'
import './Pages.scss'
import LayOutone from '../LayOutone'
import { Container } from '@mui/material'
import Checkboxs from '../Components/CheckBoxSidebar/Checkbox'
import { AccessTime } from '@mui/icons-material'
import ActivitiesPagination from '../Components/Pagination/Activipagination'

const Activities = () => {
  return (
   <>
    <LayOutone>
  <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1>Activities</h1>
    </div>
    </Container>
  </div>
  <Container maxWidth='xl'>
  <div className='checkbox--content--container'>
   
    <Checkboxs/>
    <ActivitiesPagination/>
  </div>
  </Container>
   
   </LayOutone>
  
   </>
 
  )
}

export default Activities