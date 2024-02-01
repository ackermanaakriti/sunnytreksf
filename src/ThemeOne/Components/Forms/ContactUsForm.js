import React from 'react'
import './form.scss'
import RecommendedDivs from '../Singleplace/RecommendedDivs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import MainButton from '../Buttons/MainButton'

const ContactUsForm = () => {
  return (
    <div className='contactusform--container'>
  <RecommendedDivs value='Send Quick Message'/>
        <form>
          <input placeholder='Name' /> 
          <input placeholder='Email' />
          <input placeholder='Phone no' />
          <textarea cols={4} rows={4} placeholder='Message'></textarea>
          <MainButton value='Submit'/>
        </form>

    </div>
  )
}

export default ContactUsForm