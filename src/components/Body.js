
import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import WatchMovie from "./WatchMovie"

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    },{
      path:'/watchmovie/:id',
      element:<WatchMovie/>
    }
])

const Body = () => {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
