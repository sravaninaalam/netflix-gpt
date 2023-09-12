import React from 'react'
import { Link } from 'react-router-dom'

const MovieNotFound = () => {
  return (
   <>
        <div className='w-3/5 my-28 mx-auto shadow-2xl rounded-md bg-gray-300 '>
            <h1 className='text-xl text-red-500 p-10 m-5 text-center'>This TV Series/Movie can't be played ..Watch it Only on Telivison</h1>
            <div className='text-center'>
            <Link to='/browse'><button className='outline-double p-2 m-2 hover:bg-slate-600 rounded-md'>BackHome</button> </Link>
            </div>
            
        </div>

   </>
  )
}

export default MovieNotFound
