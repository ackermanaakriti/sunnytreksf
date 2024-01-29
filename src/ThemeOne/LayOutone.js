import React from 'react'
import { ThemeOneProvider } from './Context/ThemeOcontext'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const LayOutone = ({children}) => {
  return (
   <>
   <ThemeOneProvider>

     <Navbar/>
    {children}
    <Footer/>
   </ThemeOneProvider>
   
   </>
  )
}

export default LayOutone