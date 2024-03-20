import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fallback = () => {
   useEffect(()=>{
    toast.error("TMDB  is not supporting in JIO networks ")
   })
  return (
    <>
    <ToastContainer theme='colored' position='bottom-right' limit={3}/>
    </>
  )
}

export default Fallback