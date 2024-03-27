import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fallback = () => {
   useEffect(()=>{
    toast.error("TMDB IS NOT SUPPORTING IN JIO NETWORKS ")
   })
  return (
    <>
    <ToastContainer theme='colored' position='bottom-right'/>
    </>
  )
}

export default Fallback
