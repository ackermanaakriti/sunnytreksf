import React from 'react'
import Heropagesection from '../Components/Sections/Heropagesection'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <div className='homepage'>
        <Navbar/>
        <Heropagesection/>
    </div>
    </>
  )
}

export default Home