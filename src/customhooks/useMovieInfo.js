import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addMovieInfo, addTrailer } from "../utils/redux/movieSlice"

const useMovieInfo = (movieId) => {
  const dispatch=useDispatch()
    useEffect(()=>{
     getMovieInfo()
    },[])
    
    const getMovieInfo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId,API_OPTIONS)
        const json=await data.json()
        // console.log(json)
      //  const {original_title,overview,poster_path,release_date }=json       
        dispatch(addMovieInfo(json))
      }   
   
}

export default useMovieInfo
