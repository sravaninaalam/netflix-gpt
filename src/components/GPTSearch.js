import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import {BG_IMG} from '../utils/constants'
const GPTSearch = () => {
  return (
    <>
       <div >
       <div className='absolute -z-10'>
            <img src={BG_IMG} alt='background'/>
        </div>
        <GPTSearchBar/>
               <GPTMovieSuggestions/>
       </div>
    </>
  )
}

export default GPTSearch
