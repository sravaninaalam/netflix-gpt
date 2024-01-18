import {  useRef } from "react"
import lang from "../utils/languageconstants"
import { useSelector,useDispatch} from 'react-redux'
import openai from '../utils/openAI'
import getGPTSearchMovies from "../utils/helper"
import { gptMovieResult } from "../utils/redux/gptSlice"
const GPTSearchBar = () => {
  
  const userlangkey=useSelector(store=>store.lang.defaultlang)
  const dispatch=useDispatch()
  const searchText=useRef(null)
   const onHandleSearch=async()=>{
      const gptQuery="Act as a movie recommendation system for the query"+searchText.current.value+". only give me names of 5 movies,comma separated like example ahead f2,gadar,dhee,oye,kick"
       //Make an API call to fet movie results
         const gpt_results=await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery}],
          model: 'gpt-3.5-turbo',
        });
        if(!gpt_results.choices){
          alert("NO RESULTS Found")
          
        }
        // console.log(gpt_results.choices[0]?.message?.content)
        const gptMovies=gpt_results.choices[0]?.message?.content.split(",")
        // console.log(gptMovies)
        // ["mve1","mve2","mve3","mve4","mve5"]
        // For each movie search on TMDB API
       const promiseArray=gptMovies.map(movie=>getGPTSearchMovies(movie))
       const results=await Promise.all(promiseArray)
      //  console.log(results)
      dispatch(gptMovieResult({movieNames:gptMovies,results:results}))
   }
  
  return (
    <div className=' pt-[40%] md:pt-28'>
    
      <form className='bg-black w-[99%] md:w-1/2 grid grid-cols-12 mx-auto rounded-md' onSubmit={(e)=>e.preventDefault()}>
          <input type='text' placeholder={lang[userlangkey].gptSearchPlaceholder} ref={searchText}
          className='col-span-9 md:col-span-10 px-2 m-3 py-2 rounded-md'/>
          <button type="submit" className='col-span-3 md:col-span-2 m-3 py-2 bg-red-500 rounded-md'
          onClick={onHandleSearch}>{lang[userlangkey].search}</button>

      </form>
    </div>
  )
}

export default GPTSearchBar
