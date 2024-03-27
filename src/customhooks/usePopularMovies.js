import { useEffect,} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies=()=>{
const dispatch=useDispatch()
const popularMovies=useSelector(store=>store.movies.popularMovies)
  useEffect(()=>{
    !popularMovies && getPopularMovies()
  },[])
     
  const getPopularMovies=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addPopularMovies(json?.results))
  }
  
  catch(error){
    return null
}
  }
 
}
export default usePopularMovies