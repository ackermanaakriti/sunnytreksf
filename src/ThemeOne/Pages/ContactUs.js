import { Container, Grid } from '@mui/material'
import React from 'react'
import LayOutone from '../LayOutone'
import ContactUsForm from '../Components/Forms/ContactUsForm'
import { contactus } from '../Const/Contactus'
import './Pages.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  return (
   <>
   <LayOutone>
   <div className='contactus--container'>
   <div className='pages--wrapper'>
    <Container maxWidth='xl'>
    <div className='pages--header'>
        <h1>Contact Us</h1>
    </div>
    </Container>
  </div>
  </div>

  <div className='contactus--content'>
    <Container  maxWidth='xl'>
    <Grid container >
        <Grid xs={6}>
            <div className='form--container'>
                <ContactUsForm/>
                <div className='form--content'>
                    <h4>We'are here !</h4>
                    <p>Follow Us on Social Media for the latest 
                  updates, behind-the-scenes glimpses,
                        and exclusive offers.</p>
                        <div className='socialmedia'>
                            <FacebookIcon style={{color:'#0E6097',fontSize:'30px'}}/> <InstagramIcon style={{color:'#0E6097',fontSize:'30px'}}/>
                        </div>
                </div>
            </div>
        </Grid>
      
        <Grid xs={6}>
            <div className='contactusss'>

          
            <div className='form--containerr'>
                <p>Info</p>
               {contactus.map((item)=>
               (
                <li> <FontAwesomeIcon icon={faEnvelope} /> {item.name}</li>
               ))}
            </div>
 <div className='mapcontact'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13403.074132954045!2d85.28264561667729!3d27.692444493131013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1706699951129!5m2!1sen!2snp" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
 </div>
        </Grid>
    </Grid>
    </Container>
  </div>
    
   </LayOutone>
  
   </>
  )
}

export default ContactUs