import React from 'react'
import Heropagesection from '../Components/Sections/Heropagesection'
import Navbar from '../Components/Navbar/Navbar'
import LayOutone from '../LayOutone'
import TopVacDestination from '../Components/Sections/TopVacDestination'
import ExploreActivities from '../Components/Sections/ExploreActivities'
import MajesticPeaks from '../Components/Sections/MajesticPeaks'
import OurTrendingpack from '../Components/Sections/OurTrendingpack'
import SearchDestinatio from '../Components/Sections/SearchDestinatio'

const Home = () => {
  return (
    <>
    <div className='homepage'>
      <LayOutone>
     
      <Heropagesection/>
     
      <TopVacDestination/>
      <ExploreActivities/>
      <MajesticPeaks/>
      <OurTrendingpack/>
      </LayOutone>
        
       
    </div>
    </>
  )
}

export default Home