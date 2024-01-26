import React from 'react'
import Heropagesection from '../Components/Sections/Heropagesection'
import Navbar from '../Components/Navbar/Navbar'
import LayOutone from '../LayOutone'
import TopVacDestination from '../Components/Sections/TopVacDestination'

const Home = () => {
  return (
    <>
    <div className='homepage'>
      <LayOutone>
     
      <Heropagesection/>
      <TopVacDestination/>
      </LayOutone>
        
       
    </div>
    </>
  )
}

export default Home