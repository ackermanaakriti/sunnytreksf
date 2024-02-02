import React from 'react'
import './form.scss'
import RecommendedDivs from '../Singleplace/RecommendedDivs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faUser,faPhone} from '@fortawesome/free-solid-svg-icons'
import MainButton from '../Buttons/MainButton'


const ContactUsForm = () => {
  return (
    <div className='contactusform--container'>
  <RecommendedDivs value='Send Quick Message'/>
  <form>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Name'/> <span> <FontAwesomeIcon icon={faUser} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Email'/> <span> <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <input placeholder='Phone No'/> <span> <FontAwesomeIcon icon={faPhone} style={{fontSize:'20px', color:'#4A4A4A'}} /> </span>
      </div>
      <div className='input--wrapper--inquiry'>
      <textarea rows={3} cols={10}  placeholder='Message'></textarea>
      </div>

      <MainButton value='Submit'/>
       
      
    </form>

    </div>
  )
}

export default ContactUsForm