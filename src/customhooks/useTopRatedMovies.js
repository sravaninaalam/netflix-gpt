import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies=()=>{
const dispatch=useDispatch()
const topRatedMovies =useSelector(store=>store.movies.topRatedMovies)
  useEffect(()=>{
   !topRatedMovies && getTopRatedMovies()
  },[])
     
  const getTopRatedMovies=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addTopRatedMovies(json?.results))
  }
  catch(error){
    alert("Sorry😔 !!!Tmdb is not supporting in jio networks")
}
  }
}
export default useTopRatedMovies