import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
   <>
        <div className='w-48'>
            <img src={IMG_CDN_URL+poster_path} className='m-2 p-2'  alt='moviecard'/>
        </div>
   </>
  )
}

export default MovieCard
