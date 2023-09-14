import { Link, useParams } from 'react-router-dom'
import { IMG_CDN_URL, LOGO } from '../utils/constants'
import useMovieInfo from '../customhooks/useMovieInfo'
import { useSelector } from 'react-redux'
import WatchVideo from './WatchVideo'
import MovieNotFound from './MovieNotFound'
import { useOnline } from '../customhooks/useOnline'
import Ofline from './Ofline'


const WatchMovie = () => {
  const {id}=useParams()
 
  useMovieInfo(id)
  const movie=useSelector(store=>store.movies.movieInfo)
  // console.log(movie)
  const title_name=movie?.title ? movie?.title:(movie?.name ?movie?.name:"")

  const online=useOnline()
  if(!online){
    return <Ofline/>
  }

  return (!movie)?<MovieNotFound/>: (
    <>
        <div className='bg-black bg-gradient-to-b from-black w-screen'>
         <Link to='/browse'><img src={LOGO} alt='applogo' className='w-44 mx-5 md:mx-0'/></Link>
        </div>
        <div className=' my-5 mx-10  md:flex '> 
              <img src={IMG_CDN_URL+movie?.poster_path } className='m-2 p-2 w-52 md:w-56 h-56 md:h-60'  alt='moviecard'/>    
             <div className='ml-5 '>
                  <h1 className='mt-5 font-bold text-xl'>
                      {title_name?title_name:''}
                    </h1>
                  <h3 className='px-5 w-full md:px-18 text-lg'>{movie?.tagline}</h3>
                  <h4 className='py-1 font-medium'>{movie?.genres?.map((kind)=><span key={kind?.id}>
                   {kind.name?kind?.name:''}|</span>)}</h4>
                  <h4 className='py-1 font-medium'>Country:<span  className='text-gray-500 ml-1'>{movie?.production_countries[0]?.name}</span></h4>
                  <h4 className='py-1 font-medium'>Release Date:<span  className='text-gray-500 ml-1'>{movie?.release_date}</span></h4>
                  <h4 className='py-1 font-medium'>Production Company:{movie?.production_companies?.map((prod)=>
                      <span className='text-gray-500 ml-1' key={prod?.id}>{prod?.name?prod?.name:""}|</span>)}</h4>
                  <button className='hidden md:inline-block py-2 px-3 m-2  rounded-md bg-gray-300'>Trailer</button>   
                  <button className='py-2 px-3 my-2 rounded-md bg-slate-600 text-white'>⬇MOBILE DOWNLOAD</button>
            </div>  
        </div>
        <div>
          <h1 className='absolute font-bold mt-[55%] md:mt-[15%] mx-20 text-3xl text-white'>{title_name}</h1>
          <p className='hidden md:block absolute md:w-1/3 font-semibold mt-[18%] mx-20  text-white'>{movie?.overview}</p>
          <WatchVideo movieId={movie?.id}/>
        </div>
    </>
  )
}

export default WatchMovie
