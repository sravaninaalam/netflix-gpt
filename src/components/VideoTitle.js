import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <>
        <div className='pt-[20%] px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
            <h3 className='font-bold p-2 m-2 text-4xl'>{title}</h3>
            <p className='font-medium p-2 m-2 w-1/3'>{overview}</p>
            <div>
                <button className='bg-white px-5 py-2 m-2 rounded-md text-black hover:bg-opacity-80 text-md'> Play</button>
                <button className='bg-gray-500 px-4 py-2 m-2 rounded-md bg-opacity-50 text-md'>More Info</button>
            </div>
       </div>
    </>
  )
}

export default VideoTitle
