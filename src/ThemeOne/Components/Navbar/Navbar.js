import { Grid ,Container} from '@mui/material'
import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navlinks } from '../../Const/Navlinks'
import { Link } from 'react-router-dom'

import Topbar from './Topbar'
import './Navbar.scss'
import BookNowBTn from '../Buttons/BookNowBTn'

const Navbar = () => {
  return (
   <>
   <div className='navbar--main--wrapper'>
   <Topbar/>
   <div className='navbar--wrapper'>
    <Container   className='container'>
            <Grid container style={{ alignItems: 'center' }}>
                <Grid lg={2} >
                    <Link to='/'>Logo</Link>
                </Grid>
                <Grid lg={8} md={9} xs={12}>
                    <div className='navlinks--wrapper'>
                    <ul>
                        {navlinks.map((item)=>
                        (
                             <li> <Link to={item.path} style={{textDecoration:'none',color:'white'}}>  {item.name} <span> <FontAwesomeIcon style={{fontSize:'13px',paddingLeft:'7px'}} icon={faChevronDown} /></span>   </Link> </li>
                          
                        ))}
                       
                        
                       
                    </ul>
                    </div>
                </Grid>
                
               
                <Grid lg={2} md={2} >
                   
                  <BookNowBTn value='Book Now'/>

                    
                   
                </Grid>
            </Grid>
    </Container>
   </div>
   </div>
   
   </>
  )
}

export default Navbar