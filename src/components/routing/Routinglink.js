import { useSelector } from "react-redux"

import { Link} from "react-router-dom"
import MovieCard from "../MovieCard"
import { LOGO } from "../../utils/constants"


const Upcoming = () => {
 
    const movies=useSelector(store=>store.movies)
    if(!movies) return
 
    
  return (
    <div className="bg-black"> 

   <div className='bg-gradient-to-b from-black w-screen'>
         <Link to='/browse'><img src={LOGO} alt='applogo' className='w-44 mx-5 md:mx-0'/></Link>
        </div>
    <div className="flex flex-wrap mt-5 w-4/5 mx-2 md:mx-auto ">
          {movies?.upcomingMovies.map(movie=>
               <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
    </div>
    </div>
  )
}

export default Upcoming

export function TopRated(){
  const movies=useSelector(store=>store.movies)
  return(
    <div className="bg-black">
    <div className=' bg-gradient-to-b from-black w-screen'>
         <Link to='/browse'><img src={LOGO} alt='applogo' className='w-44 mx-5 md:mx-0'/></Link>
        </div>
    <div className="flex flex-wrap mt-5 w-4/5 mx-2 md:mx-auto">
    {movies?.topRatedMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
</div>
  )
}

export function Popular(){

  const movies=useSelector(store=>store.movies)
  return(
    <div className="bg-black">
       <div className='bg-gradient-to-b from-black w-screen'>
         <Link to='/browse'><img src={LOGO} alt='applogo' className='w-44 mx-5 md:mx-0'/></Link>
        </div>
    <div className="flex flex-wrap  mt-5 w-4/5 mx-2 md:mx-auto">
    {movies?.popularMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
</div>
  )
}
export function Nowplaying(){
  const movies=useSelector(store=>store.movies)
  return(
    <div className="bg-black">
       <div className='bg-gradient-to-b from-black w-screen'>
         <Link to='/browse'><img src={LOGO} alt='applogo' className='w-44 mx-5 md:mx-0'/></Link>
        </div>
    <div className="flex flex-wrap  mt-5 w-4/5 mx-2 md:mx-auto">
    {movies?.nowPlayingMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
</div>
  )
}

