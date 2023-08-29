import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_IMG } from '../utils/constants'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const[issignin,setIsSignIn]=useState(true)
    const[error,setError]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const handleButton=()=>{
       const msg= checkValidData(name.current.value,email.current.value,password.current.value)
       setError(msg)

    }
    const togglesignin=()=>{
        setIsSignIn(!issignin)
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src={BG_IMG} alt='background'/>
        </div>
        <form className='bg-black absolute w-3/12 my-36 p-10 mx-auto left-0 right-0 bg-opacity-80'
        onSubmit={(e)=>{e.preventDefault()}}>
            <h1 className='font-serif text-3xl text-white mb-3 p-2 '> {issignin ?"Sign In":"Sign Up"}</h1>
            {!issignin && <input type='text' ref={name} placeholder='Full Name' className='w-full p-2 m-2 rounded-md bg-gray-700'/>}
            <input type='email' ref={email} placeholder='Email Adress' className='w-full p-2 m-2 rounded-md bg-gray-700'/>
            <input type='password' ref={password} placeholder='Password'className='w-full p-2 m-2 rounded-md bg-gray-700'/>
             
             <p className='text-red-500 font-semibold p-2'>{error}</p>

            <button className='text-white p-2 m-2 bg-red-600 w-full rounded-md' onClick={handleButton}>
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
