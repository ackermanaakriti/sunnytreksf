import React from 'react'
import './Pages.scss'
import LayOutone from '../LayOutone'
import { Container } from '@mui/material'
import PackagesPagination from '../Components/Pagination/PackagesPagination'
import Checkboxs from '../Components/CheckBoxSidebar/Checkbox'

const Packages = () => {
  return (
    <>
  <LayOutone>
  <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1>Packages</h1>
    </div>
    </Container>
  </div>
  <Container maxWidth='xl'>
  <div className='checkbox--content--container'>
   
   <Checkboxs/>
  
   <PackagesPagination/>
  </div>
  </Container>
  </LayOutone>

    </>

  )
}

export default Packages