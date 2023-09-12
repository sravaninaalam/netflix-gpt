
import { useSelector } from 'react-redux'

import useTrailerVideo from '../customhooks/useTrailerVideo'
const VideoBackground = ({movieId}) => {
   
  useTrailerVideo(movieId)
  const trailer=useSelector(store=>store.movies.trailer)
  return (
      <>
          <iframe className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
           title="YouTube video player" allow="accelerometer; autoplay" 
          allowFullScreen></iframe>
      </>
  )
}

export default VideoBackground
