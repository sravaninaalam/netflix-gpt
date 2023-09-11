import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import {BG_IMG} from '../utils/constants'
const GPTSearch = () => {
  return (
    <>
     <div className='fixed -z-10'>
                <img src={BG_IMG} alt='background' className='h-screen w-screen object-cover'/>
            </div>
       <div className=''>
               <GPTSearchBar/>
               <GPTMovieSuggestions/>
       </div>
    </>
  )
}

export default GPTSearch
