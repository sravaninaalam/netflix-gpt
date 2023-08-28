import React, { useState } from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constants'

const Login = () => {
    const[issignin,setIsSignIn]=useState(true)
    const togglesignin=()=>{
        setIsSignIn(!issignin)
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src={BG_IMG} alt='background'/>
        </div>
        <form className='bg-black absolute w-3/12 my-36 p-10 mx-auto left-0 right-0 bg-opacity-80'>
            <h1 className='font-serif text-3xl text-white mb-3 p-2 '> {issignin ?"Sign In":"Sign Up"}</h1>
            {!issignin && <input type='text' placeholder='Full Name' className='w-full p-2 m-2 rounded-md bg-gray-700'/>}
            <input type='email' placeholder='Email Adress' className='w-full p-2 m-2 rounded-md bg-gray-700'/>
            <input type='password' placeholder='Password'className='w-full p-2 m-2 rounded-md bg-gray-700'/>
            <button className='text-white p-2 m-2 bg-red-600 w-full rounded-md'>
                  {issignin ?"Sign In":"Sign Up"}
            </button>
            <p className=' cursor-pointer text-white p-2 my-3 mx-2' onClick={togglesignin}>
                {issignin?"New to Netflix? Signup Now":"Have an account ? Sign In now"}
            </p>
           
            
        </form>
    </div>
  )
}

export default Login
