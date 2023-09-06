import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies=()=>{
const dispatch=useDispatch()
  useEffect(()=>{
    getTopRatedMovies()
  },[])
     
  const getTopRatedMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addTopRatedMovies(json?.results))
  }
}
export default useTopRatedMovies