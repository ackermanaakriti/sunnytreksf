import React from 'react'
import { Router,Route,Routes } from 'react-router-dom'
import Destination from '../Pages/Destination'
import Home from '../Pages/Home'
import SinglePlace from '../Pages/SinglePlace'
import Activities from '../Pages/Activities'
import ContactUs from '../Pages/ContactUs'
import Book from '../Pages/Book'

const Routers = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>

        <Route path='/destination' element={<Destination/>}/>
        <Route path='/singleplace' element={<SinglePlace/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/book' element={<Book/>}/>



        
    </Routes>
    </>
  )
}

export default Routers