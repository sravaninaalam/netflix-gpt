import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addPopularMovies, addUpcomingMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useUpcomingMovies=()=>{
const dispatch=useDispatch()
  useEffect(()=>{
    getUpcomingMoviesMovies()
  },[])
     
  const getUpcomingMoviesMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addUpcomingMovies(json?.results))
  }
}
export default useUpcomingMovies