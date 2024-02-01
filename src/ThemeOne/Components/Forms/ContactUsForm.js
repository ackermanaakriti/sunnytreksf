import React from 'react'
import './form.scss'

const ContactUsForm = () => {
  return (
    <div className='contactusform--container'>
        <div className='contactusform--header'><p>Send Quick Message</p></div>
        <form>
          <input placeholder='Name' />
          <input placeholder='Email' />
          <input placeholder='Phone no' />
          <textarea cols={4} rows={4} placeholder='Message'></textarea>
        </form>

    </div>
  )
}

export default ContactUsForm