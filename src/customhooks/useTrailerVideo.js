import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailer } from "../utils/redux/movieSlice"

const useTrailerVideo = (movieId) => {
 
    const dispatch=useDispatch()
  
    
    const getMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS)
        const json=await data.json()
       
        const trailer=json?.results.filter((video)=>video.type==="Trailer" || 
                                            video.type === "Official Trailer" ||
                                            video.type === "Teaser" ||
                                            video.type === "Featurette" ||
                                            video.type.toLowerCase().includes("trailer"))
          const result=trailer.length ?trailer[0] :json?.results[0]
          // const videokey=result[0]?.key
          dispatch(addTrailer(result))
      } 

      useEffect(()=>{
        getMovies()
     },[movieId])
   
}

export default useTrailerVideo
