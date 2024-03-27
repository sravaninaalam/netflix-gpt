
import Header from './Header'
import useNowPlayingMovies from '../customhooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../customhooks/usePopularMovies'
import useTopRatedMovies from '../customhooks/useTopRatedMovies'
import useUpcomingMovies from '../customhooks/useUpcomingMovies'
import usePopularTVSeries from '../customhooks/usePopularTVSeries'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
import useTopRatedTVSeries from '../customhooks/useTopRatedTVSeries'
import { useOnline } from '../customhooks/useOnline'
import Ofline from './Ofline'
import Fallback from '../Fallback'
import Network from '../Network'

const Browse = () => {
  const isShowGpt=useSelector(store=>store.gpt.isShowGpt)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  usePopularTVSeries()
  useTopRatedTVSeries()

  const online =useOnline()
  if(!online){
    return <Ofline/>
  }

  return (
    <div>
      <Header />
        {isShowGpt===false?<div>
          <Maincontainer/>
          <Secondarycontainer/></div>
      :     
        <GPTSearch/>
      } 
    </div>
  )
}

export default Browse
