
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  addPopularTVSeries } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularTVSeries=()=>{
const dispatch=useDispatch()
const popularTVSeries=useSelector(store=>store.movies.popularTVSeries)
  useEffect(()=>{
    !popularTVSeries && getPopularTVSeries()
  },[])
     
  const getPopularTVSeries=async()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addPopularTVSeries(json?.results))
  }
  catch(error){
    alert("Sorry😔 !!!Tmdb is not supporting in jio networks")
}
  }
}
export default usePopularTVSeries