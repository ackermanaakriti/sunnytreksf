import React from 'react'
import { ThemeOneProvider } from './Context/ThemeOcontext'
import Navbar from './Components/Navbar/Navbar'

const LayOutone = ({children}) => {
  return (
   <>
   <ThemeOneProvider>

     <Navbar/>
    {children}
   </ThemeOneProvider>
   
   </>
  )
}

export default LayOutone