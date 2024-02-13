import { Container ,Grid} from '@mui/material'
import React from 'react'
import './section.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudflare } from '@fortawesome/free-brands-svg-icons';
import '../../responsive.scss'


const SearchDestinatio = () => {
  return (
    <>
    <div className='search--places--wrapper'>
        <Container >
            <div className='searchdestination--container'>
               <Grid container justifyContent={'space-between'}>
                <Grid>
                    <div className='destinations--input'>
                    <span>
                        <FontAwesomeIcon icon={faCloudflare} /> 
                        </span>
                       <select>
                        <option>Destination</option>
                        <option>Pokhara</option>
                        <option>Lumbini</option>
                        <option>Chitawan</option>
                       </select>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                    <span>
                        <FontAwesomeIcon icon={faCloudflare} /> 
                        </span>
                    <select>
                        <option> Activities</option>
                        <option>Pokhara</option>
                        <option>Lumbini</option>
                        <option>Chitawan</option>
                       </select>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                    <span>
                        <FontAwesomeIcon icon={faCloudflare} /> 
                        </span>
                        
                   
                    <select>
                  
                        <option>Seasons</option>
                        <option>Pokhara</option>
                        <option>Lumbini</option>
                        <option>Chitawan</option>
                       </select>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                    <span>
                        <FontAwesomeIcon icon={faCloudflare} /> 
                        </span>
                    <select>
                        <option>Duration</option>
                        <option>Pokhara</option>
                        <option>Lumbini</option>
                        <option>Chitawan</option>
                       </select>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input--button'>
                       <button>Search Result</button>
                    </div>
                </Grid>
               </Grid>
            </div>
        </Container>
    </div>
    </>
  )
}

export default SearchDestinatio