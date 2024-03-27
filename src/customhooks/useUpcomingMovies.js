import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  addUpcomingMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"
const useUpcomingMovies=()=>{
const dispatch=useDispatch()
const upcomingMovies=useSelector(store=>store.movies.upcomingMovies)
  useEffect(()=>{
   !upcomingMovies && getUpcomingMoviesMovies()
  },[])
     
  const getUpcomingMoviesMovies=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addUpcomingMovies(json?.results))
  }
    catch(error){
     return null
}
  }
}
export default useUpcomingMovies