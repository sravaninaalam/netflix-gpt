import { useSelector } from "react-redux"

import { Link} from "react-router-dom"
import MovieCard from "../MovieCard"


const Upcoming = () => {
 
    const movies=useSelector(store=>store.movies)
    if(!movies) return
 
    
  return (
    <> 
  
    <div className="flex flex-wrap bg-black">
          {movies?.upcomingMovies.map(movie=>
               <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
    </div>
    </>
  )
}

export default Upcoming

export function TopRated(){
  const movies=useSelector(store=>store.movies)
  return(
    <>
   
    <div className="flex flex-wrap bg-black">
    {movies?.topRatedMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
</>
  )
}

export function Popular(){

  const movies=useSelector(store=>store.movies)
  return(
    <div className="flex flex-wrap bg-black">
    {movies?.popularMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
  )
}
export function Nowplaying(){
  const movies=useSelector(store=>store.movies)
  return(
    <div className="flex flex-wrap bg-black">
    {movies?.nowPlayingMovies.map(movie=>
         <Link to={'/watchmovie/'+movie?.id}  key={movie?.id}><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link>)}    
</div>
  )
}

