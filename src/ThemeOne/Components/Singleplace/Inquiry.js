import React from 'react'

import './singlepage.scss'
import RecommendedDivs from './RecommendedDivs'

const Inquiry = () => {
  return (
   <>
   <div className='inquiry--container'>
    <div className='inquiry--div'><p>Make an Inquiry</p></div>
    <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Phone No'/>
        <input placeholder='Message'/>
        
    </form>
    <RecommendedDivs/>
   </div>
   </>
  )
}

export default Inquiry