
import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import WatchMovie from "./WatchMovie"
import Upcoming, { Nowplaying, Popular, TopRated } from "./routing/Routinglink"
import Network from '../Network' 

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
         element:<Network/>,
       
    },
    {
      path:'/watchmovie/:id',
      element:<WatchMovie/>
    },
    {
      path:'/upcoming',
      element:<Upcoming/>
    },{
      path:'/toprated',
      element:<TopRated/>
    },{
      path:'/popular',
      element:<Popular/>
    },{
      path:'/nowplaying',
      element:<Nowplaying/>
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
