
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
import Network from '../Network'
import Fallback from '../Fallback'
const Browse = () => {
  const isShowGpt=useSelector(store=>store.gpt.isShowGpt)
  const networkProvider=useSelector(store=>store.network.network_type)
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
      <Network/>
      {networkProvider.includes("Jio")?<Fallback/>:<div>
          {isShowGpt===false?<div>
              <Maincontainer/>
              <Secondarycontainer/></div>
          :     
            <GPTSearch/>
          }
      </div>
      }
    </div>
  )
}

export default Browse
