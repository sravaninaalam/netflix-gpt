
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies){
      return 
    }
    const mainmovie=movies[0]
    // console.log(mainmovie)
    const {original_title,overview}=mainmovie
  return (
    <>
        <div className='pt-[32%] bg-black md:pt-0'>
           <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={mainmovie?.id}/>   
        </div>
    </>
  )
}

export default Maincontainer
