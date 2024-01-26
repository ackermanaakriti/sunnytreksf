import { Grid ,Container} from '@mui/material'
import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navlinks } from '../../Const/Navlinks'

import Topbar from './Topbar'
import './Navbar.scss'

const Navbar = () => {
  return (
   <>
   <div className='navbar--main--wrapper'>
   <Topbar/>
   <div className='navbar--wrapper'>
    <Container>
            <Grid container>
                <Grid lg={1} xs={1}></Grid>
                <Grid lg={9} xs={9}>
                    <div className='navlinks--wrapper'>
                    <ul>
                        {navlinks.map((item)=>
                        (
                            <li>{item.name} <span> <FontAwesomeIcon style={{fontSize:'13px',paddingLeft:'7px'}} icon={faChevronDown} /></span> </li>
                        ))}
                        
                       
                    </ul>
                    </div>
                </Grid>
                
               
                <Grid lg={2} xs={2}>
                    <div className='navbar--button'>
                    <button>Customize Tour</button>
                    </div>
                   
                </Grid>
            </Grid>
    </Container>
   </div>
   </div>
   
   </>
  )
}

export default Navbar