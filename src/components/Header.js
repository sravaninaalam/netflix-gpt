import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div  className='absolute px-6 py-2 bg-gradient-to-b from-black z-10'>
      <img src={LOGO} alt='logo' className='w-44 '/>
    </div>
  )
}

export default Header
