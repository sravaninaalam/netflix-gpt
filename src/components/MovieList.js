import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    if(!movies) return
  return (
  
  <div className='px-6'>
      <h1 className=' text-lg md:text-2xl py-4 text-white pl-5'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map(movie=>
                          <MovieCard key={movie?.id} poster_path={movie?.poster_path} movieName={movie?.title ?movie?.title :movie?.name} /> 
                )}
        </div>
      </div>
</div>
  )
}

export default MovieList

