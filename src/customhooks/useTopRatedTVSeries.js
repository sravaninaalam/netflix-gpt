import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedTVSeries } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedTVSeries=()=>{
const dispatch=useDispatch()
const topRatedTVSeries=useSelector(store=>store.movies.topRatedTVSeries)
  useEffect(()=>{
    !topRatedTVSeries && gettopRatedTVSeries()
  },[])
     
  const gettopRatedTVSeries=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addTopRatedTVSeries(json?.results))
  }
  catch(error){
    alert("Sorry😔 !!!Tmdb is not supporting in jio networks")
}
  }
}
export default useTopRatedTVSeries