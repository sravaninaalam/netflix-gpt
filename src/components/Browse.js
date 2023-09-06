
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../customhooks/usePopularMovies'
import useTopRatedMovies from '../customhooks/useTopRatedMovies'
import useUpcomingMovies from '../customhooks/useUpcomingMovies'

const Browse = () => {
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
       <Maincontainer/>
       <Secondarycontainer/>
    </div>
  )
}

export default Browse
