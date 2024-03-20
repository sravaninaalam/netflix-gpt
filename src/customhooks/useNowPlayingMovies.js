import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies=()=>{
const dispatch=useDispatch()
const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  useEffect(()=>{
   !nowPlayingMovies && getNowPlayingMovies()
  },[])
   
  const getNowPlayingMovies=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json=await data.json()
   
    dispatch(addNowPlayingMovies(json?.results))
    }
    catch(error){
      return null
  }
  }
}
export default useNowPlayingMovies