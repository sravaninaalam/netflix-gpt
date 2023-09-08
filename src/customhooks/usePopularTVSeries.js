
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {  addPopularTVSeries } from "../utils/redux/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularTVSeries=()=>{
const dispatch=useDispatch()
  useEffect(()=>{
    getPopularTVSeries()
  },[])
     
  const getPopularTVSeries=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS)
    const json=await data.json()
    // console.log(json?.results)
    dispatch(addPopularTVSeries(json?.results))
  }
}
export default usePopularTVSeries