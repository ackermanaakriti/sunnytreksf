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
    <div className='activites--wrapper'>
   <div className="pages--wrapper">
        <Container>
          <div className="pages--header">
            <h1>Activities</h1>
          </div>
        </Container>
      </div>

      <Container>
  <div className='checkbox--content--container'>
   
    <Checkboxs/>
    <ActivitiesPagination/>
  
   
  </div>
  </Container>
  </div>
   </LayOutone>
  
   </>
 
  )
}

export default Activities