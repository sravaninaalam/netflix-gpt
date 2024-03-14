import React, { useRef } from 'react'
import openai from '../utils/openAI'
import getGPTSearchMovies from '../utils/helper'
import { useDispatch } from 'react-redux'
import { gptMovieResult } from '../utils/redux/gptSlice'

const Searchbar = () => {
  const dispatch=useDispatch()
    const searchQuery=useRef('')
    const handleSearch=async()=>{
      //   const getQuery="Act as a movie recommondation system and suggest results for"+searchQuery.current.value+".Only give me the names with comma seperated"

      //   const openai_reslt= await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: getQuery }],
      //    model: 'gpt-3.5-turbo',
      // });
      // console.log(openai_reslt,"results from AI")
      const promiseArray=await getGPTSearchMovies(searchQuery.current.value)
      // console.log(promiseArray)
     dispatch(gptMovieResult(promiseArray))
          
    }
  return (
   <div className=' pt-[40%] md:pt-28'>
     <form className='bg-black w-[99%] md:w-1/2 grid grid-cols-12 mx-auto rounded-md' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder='search movies here' ref={searchQuery}
       className='col-span-9 md:col-span-10 px-2 m-3 py-2 rounded-md'/>
         <button type="submit" className='col-span-3 md:col-span-2 m-3 py-2 bg-red-500 rounded-md'
         onClick={handleSearch}>
        Search </button>
     </form>
   </div>
  )
}

export default Searchbar
