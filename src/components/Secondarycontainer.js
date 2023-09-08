import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const Secondarycontainer = () => {
  const movies=useSelector(store=>store.movies)
  if(!movies) return
  return (
    <div className='bg-black w-screen '>
    <div className='-mt-52 relative z-20'>
        <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies}/>
        <MovieList title="Popular Movies" movies={movies.popularMovies}/>
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies}/>
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies}/>
        <MovieList title="Popular TV Series" movies={movies.popularTVSeries}/>
    </div>
  </div>
  )
}

export default Secondarycontainer
