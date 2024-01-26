import { Container ,Grid} from '@mui/material'
import React from 'react'
import './section.scss'

const SearchDestinatio = () => {
  return (
    <>
    <div className='searchdestination--wrapper'>
        <Container>
            <div className='searchdestination--container'>
               <Grid container columnGap={4}>
                <Grid>
                    <div className='destinations--input'>
                        <input placeholder='Destination'/>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                        <input placeholder='Destination'/>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                        <input placeholder='Destination'/>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                        <input placeholder='Destination'/>
                    </div>
                </Grid>
                <Grid>
                    <div className='destinations--input'>
                        <input placeholder='Destination'/>
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