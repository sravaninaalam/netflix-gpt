import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailer } from "../utils/redux/movieSlice"

const useTrailerVideo = (movieId) => {
 
    const dispatch=useDispatch()
  
    
    const getMovies=async()=>{
      try{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS)
        const json=await data.json()
       
        const trailer=json?.results.filter((video)=>video.type==="Trailer")
          const result=trailer.length ?trailer[0] :json?.results[0]
          // const videokey=result[0]?.key
          dispatch(addTrailer(result))
      }
      catch(error){
        return null
}
      } 

      useEffect(()=>{
        getMovies()
     },[movieId])
   
}

export default useTrailerVideo
