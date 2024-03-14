import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { useOnline } from '../customhooks/useOnline'
import Ofline from './Ofline'


const GPTMovieSuggestions = () => {
  const {movieResults,movieNames}=useSelector(store=>store.gpt)
  // const {movieResults}=useSelector(store=>store.gpt)
  const online=useOnline()
  if(!online) return <Ofline/>
  // if(!movieNames) return
  console.log(movieResults)
  if(!movieResults) return

  return (
   <>
      <div className='text-white bg-black p-4 m-4 bg-opacity-80'>
        {movieNames.map((movieName,index)=>
         <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        )}
        {/* <MovieList title={movieResults[0]?.title} movies={movieResults}/> */}
      </div>
   </>
  )
}

export default GPTMovieSuggestions
