import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navitems = () => {
    const navigate=useNavigate()
  return (
    <>
    <div className=''> 
            <ul className='text-white md:flex pt-5 pl-3 gap-6 hidden'>
                <li className='cursor-pointer hover:text-red-500'onClick={()=>navigate('/browse')}>Home</li>
                <li className='cursor-pointer hover:text-red-500 ' onClick={()=>navigate('/nowplaying')}>NowPLaying</li>
                <li className='cursor-pointer hover:text-red-500' onClick={()=>navigate('/popular')}>Popular</li>
                <li className='cursor-pointer hover:text-red-500' onClick={()=>navigate('/toprated')}>TopRated</li>
                <li className='cursor-pointer hover:text-red-500' onClick={()=>navigate('/upcoming')}>Upcoming</li>
               
            </ul>
       </div>
    </>
  )
}

export default Navitems
