import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Container, Grid } from "@mui/material";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const Topbar = () => {
  return (
    <>
     <div className="tophotbar--container">
                <p>20% off on The trips to Annapurna from Mustang Route. <span> Enquire Now!!!</span></p>
            </div>
      <div className="topbar--wrapper">

        
           
          <div className="topbar--container">
            <Container  >
          
            <Grid container>
                <Grid lg={3}  md={5} sm={6} >
                    <div className="topbar--contact--wrapper">
                    <div className="topbar--contact">
                      <span>
                    <FontAwesomeIcon style={{fontSize:'22px'}} icon={faEnvelope} />
                    </span>
                    <p>xyz@gmail.com</p>
                    </div>
                    <div className="topbar--contact">
                      <span>
                    <FontAwesomeIcon style={{fontSize:'18px'}} icon={faPhone} />
                    </span>
                    <p>+977 97876543</p>
                    </div>
                    </div>
                   
                </Grid>
                <Grid lg={6} sm={1} md={4} xs={0}></Grid>
                <Grid lg={3} md={3} sm={5} >
                    <div className="sm--icons">
                      <span>  <FontAwesomeIcon style={{fontSize:'22px',color:'white'}} icon={faFacebookF} /></span>
                      <span> <FontAwesomeIcon style={{fontSize:'22px',color:'white'}}  icon={faInstagram} /></span>
                  <span>  <FontAwesomeIcon style={{fontSize:'22px',color:'white'}}  icon={faTwitter} /></span>
                    
                  
                    </div>
                </Grid>
              
            </Grid>
            </Container>
            
          </div>
       
      </div>
    </>
  );
};

export default Topbar;
