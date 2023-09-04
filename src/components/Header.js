import React from 'react'
import { LOGO,USER_ICON_FUNNY } from '../utils/constants'
import {  signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const handleSignout=()=>{
   
      signOut(auth).then(() => {
           navigate('/')

        }).catch((error) => {
  // An error happened.
    });
  }
  return (
    <div  className='absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src={LOGO} alt='logo' className='w-44 '/>
    { user && 
      <div  className='flex'>
        <img src={user?.photoURL} alt='user' className='w-10 h-10 m-2'/>
        <button className='text-white font-bold' onClick={handleSignout}>SignOut</button>
      </div>
      }
    </div>
  )
}

export default Header
