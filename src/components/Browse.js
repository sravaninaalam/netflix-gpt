
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {
  
  useNowPlayingMovies()

  return (
    <div className='flex'>
      <Header />
       <Maincontainer/>
       <Secondarycontainer/>
    </div>
  )
}

export default Browse
