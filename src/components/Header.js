import React, { useEffect } from 'react'
import { LOGO,SUPPORTED_LANGUAGES,USER_ICON_FUNNY } from '../utils/constants'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
import { toggleGPTSearch } from '../utils/redux/gptSlice';
import { changeLanguage } from '../utils/redux/languageSlice';
import Navitems from './Navitems';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)

  const isShowGpt=useSelector(store=>store.gpt.isShowGpt)
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

    const handleGPTSearch=()=>{
      dispatch(toggleGPTSearch( ))
    }
    const handleLaunguage=(e)=>{
      dispatch(changeLanguage(e.target.value))
    }
  return (
    <div  className='absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between flex-col md:flex-row'>
      <div className='flex'><img src={LOGO} alt='logo' className='w-44 mx-5 md:mx-0'/></div>
      {user && <Navitems/>}
    { user && 
      <div  className='flex p-2 justify-between'>
          {isShowGpt &&
          <select className='mx-4 my-2 rounded-md  bg-gray-800 text-white' onClick={handleLaunguage}>
            {SUPPORTED_LANGUAGES.map(lang=>
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      
          </select>
        }
            <button className='bg-emerald-500 text-white h-10 px-4 py-2 m-1 md:mx-4 md:my-2 rounded-md'
            onClick={handleGPTSearch}>{isShowGpt?"Home":"GPT Search"}</button>
            <img src={USER_ICON_FUNNY} alt='user' className= 'w-10 h-10 hidden md:block md:m-2 '/>
            <button className='text-white font-bold ' onClick={handleSignout}>SignOut</button>
      
      </div>
      }
    </div>
    // <h1>head</h1>
  )
}

export default Header
