import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailer } from "../utils/redux/movieSlice"

const useTrailerVideo = (movieId) => {
 
    const dispatch=useDispatch()
   
  
    useEffect(()=>{
      getMovies()
    },[])
    
    const getMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const json=await data.json()
        // console.log(json)
        const trailer=json?.results.filter(video=>video.type==="Trailer")
          const result=trailer.length ?trailer[0] :json?.results[0]
          // const videokey=result[0]?.key
          dispatch(addTrailer(result))
      }   
   
}

export default useTrailerVideo
