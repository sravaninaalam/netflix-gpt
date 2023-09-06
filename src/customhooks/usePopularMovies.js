import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies, addPopularMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies=()=>{
const dispatch=useDispatch()
  useEffect(()=>{
    getPopularMovies()
  },[])
     
  const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addPopularMovies(json?.results))
  }
}
export default usePopularMovies