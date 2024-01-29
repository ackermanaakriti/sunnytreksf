import { Container,Grid } from '@mui/material'
import React from 'react'
import './Footer.scss'
import logo from '../../../Images/logo.png'
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";




const Footer = () => {
  return (
   <>
   <div className='footer--container'>
    <div className='footer-overlay'></div>
    <Container>
        <div className='footer--wrapper'>
            <Grid container>
                <Grid xs={2}>
                    <div className='footer--img'>
                        <img src={logo}/>
                    </div>
                </Grid>
                <Grid xs={7}>
                    <div>
                        <div className='page--lists'>
                            <ul>
                                <li>Destinations</li>
                                <li>Activities</li>
                                <li>Seasons</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                       
                        <div style={{ display: "flex", gap: "3em",justifyContent:'center',marginTop:'30px' }}>
                  <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                    <FmdGoodIcon sx={{color:'#0c5e99',background:'white',borderRadius:'30px',padding:'8px'}} /> <p style={{letterSpacing:'0.5px'}}>Kalimati,Kathmandu</p>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                   <PhoneEnabledIcon sx={{color:'#0c5e99',background:'white',borderRadius:'30px',padding:'8px'}}/> <p>+977 87654335</p>
                  </div>
               
                            
                        </div>
                        <div className='socialmedia--links'>
                            <FacebookIcon sx={{fontSize:'35px',color:'#0c5e99'}}/>
                             <InstagramIcon sx={{fontSize:'35px',color:'#0c5e99'}}/>                           
                        </div>
                    </div>
                </Grid>
                <Grid xs={3}>
                    <div className='subscribe--container'>
                        <p>Subscribe To Our Newsletter</p>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
                        border:'1px solid #0c5e99',margin:'5px 10px',
                        padding:'5px'}}>
                        <input placeholder='Enter Your Email Address'/>
                        <MailOutline sx={{color:'#0c5e99'}} /> 

                        </div>

                        <div style={{display:'flex',margin:'auto',padding:'20px'}}>
                   
                       </div>   
                    </div>
                </Grid>
            </Grid>
        </div>
    </Container>
   </div>
   </>
  )
}

export default Footer