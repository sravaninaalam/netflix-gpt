import React, { useEffect } from 'react'
import { LOGO,USER_ICON_FUNNY } from '../utils/constants'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const handleSignout=()=>{
   
      signOut(auth).then(() => {

        }).catch((error) => {
  // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
     
      if (user) {
        const {uid,email,displayName,photoURL}=user
        dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
         navigate('/browse')
       
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
    // unsubscribe when component will unmount
    return()=>unsubscribe()
      },[])
  return (
    <div  className='absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src={LOGO} alt='logo' className='w-44 '/>
    { user && 
      <div  className='flex'>
        <img src={USER_ICON_FUNNY} alt='user' className='w-10 h-10 m-2'/>
        <button className='text-white font-bold' onClick={handleSignout}>SignOut</button>
      </div>
      }
    </div>
  )
}

export default Header
