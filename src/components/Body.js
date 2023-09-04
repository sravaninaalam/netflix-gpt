import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { auth } from "../utils/firebase"
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from "../utils/redux/userSlice"
import { onAuthStateChanged } from "firebase/auth"
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }
])

const Body = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
 
  if (user) {
    const {uid,email,displayName,photoURL}=user
    dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
   
  } else {
    dispatch(removeUser())
  }
})
  },[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
