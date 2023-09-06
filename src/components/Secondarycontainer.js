import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const Secondarycontainer = () => {
  const movies=useSelector(store=>store.movies)
  if(!movies) return
  return (
    <div className='bg-black w-screen '>
    <div className='-mt-52 relative z-20'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Popular" movies={movies.popularMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
        <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
    </div>
  </div>
  )
}

export default Secondarycontainer
