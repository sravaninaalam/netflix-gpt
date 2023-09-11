import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path,movieName}) => {
  if (!poster_path) return null
  return (
   <>
        <div className='w-36 md:w-48'>
            <img src={IMG_CDN_URL+poster_path } className='m-2 p-2'  alt='moviecard'/>
             <h1 className='text-white m-2 font-semibold text-lg'>{movieName}</h1>
        </div>
   </>
  )
}

export default MovieCard
