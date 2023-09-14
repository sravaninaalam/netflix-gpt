import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { useOnline } from '../customhooks/useOnline'
import Ofline from './Ofline'


const GPTMovieSuggestions = () => {
  const {movieResults,movieNames}=useSelector(store=>store.gpt)
  // console.log(movieResults)
  const online=useOnline()
  if(!online) return <Ofline/>
  if(!movieNames) return

  return (
   <>
      <div className='text-white bg-black p-4 m-4 bg-opacity-80'>
        {movieNames.map((movieName,index)=>
         <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        )}
      </div>
   </>
  )
}

export default GPTMovieSuggestions
