import React, { useState } from 'react';
import './form.scss';
import RecommendedDivs from '../Singleplace/RecommendedDivs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import MainButton from '../Buttons/MainButton';
import axios from 'axios';

function commonMessageRendera(data){

    console.log(data)

}

const ContactUsForm = () => {
  const apiurl = process.env.REACT_APP_API_BASE_URL;
  console.log( "contact",apiurl)
  const [userInquiry, setUserInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInquiry({
      ...userInquiry,
      [name]: value,
    });
    console.log(userInquiry)
  };

  const handleSubmit= (e)=>
  {
   e.preventDefault();
    console.log('hello')
    try{

      axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contactinquiries`,userInquiry)
     .then((res)=>{
      commonMessageRendera(res.data)
     })
     .catch((err)=>console.log(err))


    }
    catch(error)
    {
      console.log('error while submittng',error)
    }
  }

  return (
    <div className='contactusform--container'>
      <RecommendedDivs value='Send Quick Message' />
      <form onSubmit={handleSubmit}>
        <div className='input--wrapper--inquiry'>
          <input
            value={userInquiry.name}
            onChange={handleChange}
            name='name'
            placeholder='Name'
          />
          <span>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: '20px', color: '#4A4A4A' }}
            />
          </span>
        </div>
        <div className='input--wrapper--inquiry'>
          <input
            value={userInquiry.email}
            onChange={handleChange}
            name='email'
            placeholder='Email'
          />
          <span>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: '20px', color: '#4A4A4A' }}
            />
          </span>
        </div>
        <div className='input--wrapper--inquiry'>
          <input
            value={userInquiry.phoneno}
            onChange={handleChange}
            name='phone'
            placeholder='Phone No'
          />
          <span>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ fontSize: '20px', color: '#4A4A4A' }}
            />
          </span>
        </div>
        <div className='input--wrapper--inquiry'>
          <textarea
            value={userInquiry.message}
            onChange={handleChange}
            name='message'
            rows={3}
            cols={10}
            placeholder='Message'
          ></textarea>
        </div>
        <MainButton type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default ContactUsForm;
