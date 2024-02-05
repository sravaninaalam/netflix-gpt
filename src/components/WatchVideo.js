

import { useSelector } from "react-redux"
import useTrailerVideo from "../customhooks/useTrailerVideo"

const WatchVideo = ({movieId}) => {
  useTrailerVideo(movieId)
  const trailer=useSelector(store=>store.movies.trailer)
  if(!trailer)return
  return (
    
         <div className="mx-10 border border-black">
               <iframe className='w-full' height='400'
                 src={"https://www.youtube.com/embed/"+trailer?.key}
                  title="YouTube video player" allow="accelerometer; autoplay" 
                    allowFullScreen>
                </iframe>
          </div>
  )
}

export default WatchVideo
