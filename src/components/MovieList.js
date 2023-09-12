import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'
const MovieList = ({title,movies}) => {

    if(!movies) return
  return (
  
  <div className='px-6'>
      <h1 className=' text-lg md:text-2xl py-4 text-white pl-5'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map(movie=>
                       <Link to={'/watchmovie/'+movie?.id}  key={movie?.id} ><MovieCard poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /></Link> 
                )}
        </div>
      </div>
</div>
  )
}

export default MovieList

