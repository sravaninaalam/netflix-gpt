import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import {BG_IMG} from '../utils/constants'
import Searchbar from './Searchbar'
const GPTSearch = () => {
  return (
    <>
     <div className='fixed -z-10'>
                <img src={BG_IMG} alt='background' className='h-screen w-screen object-cover'/>
            </div>
       <div className=''>
        {/* <Searchbar/> */}
               <GPTSearchBar/>
               <GPTMovieSuggestions/>
       </div>
    </>
  )
}

export default GPTSearch
