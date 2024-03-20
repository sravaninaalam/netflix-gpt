import { API_OPTIONS } from "../utils/constants"

const useGPTSearchMovies=async(movie)=>{
    try{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
        API_OPTIONS)
        const json=await data.json()
        return json?.results
    }
    catch(error){
       return null
    }
   }

   export default useGPTSearchMovies