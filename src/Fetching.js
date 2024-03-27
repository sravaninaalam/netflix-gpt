import React, { useEffect, useState } from 'react'
import {  API_OPTIONS_rapid } from './utils/constants'
/*
const Fetching = () => {
    const apiKey = '2302e22424msh7a8957de7d98a81p104290jsn56a56269d3a8';
    const genre = 'action';
    
    useEffect(()=>{
getPopularMovies()
    },[])
    const getPopularMovies=async()=>{
        //  fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS_rapid).then(res=>res.json()).
        //  then(res=>console.log(res?.results)).catch(err=>console.log(err))
        // try {
        //     const response = await fetch('https://imdb146.p.rapidapi.com/v1/find/?query=kabhi%20kush', API_OPTIONS_rapid);
        //     const result = await response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
    


 
    }
  return (
   <>
        <div>
            hello
        </div>
   </>
  )
}

export default Fetching

*/

// const Fetching = () => {

// const OMDB_API_KEY = 'c45bd0c1';
// const OMDB_API_URL = `http://www.omdbapi.com/?i=tt3896198&s=popular&minimumRating=7&apikey=${OMDB_API_KEY}`;
// const OMDB_API_URL_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(OMDB_API_URL)}`

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchHorrorMovies = async () => {
//       try {
//          const response = await fetch(OMDB_API_URL_CORS);
        
//         const res= await response.json()
//         console.log(res)
//         setMovies(response.data.Search);
//       } catch (error) {
//         console.error('Error', error);
//       }
//     };

//     fetchHorrorMovies();
//   }, []);

//   return (
//     <div>
//       <h1>Horror Movies</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.imdbID}>{movie.Title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };



// export default Fetching


import cheerio from 'cheerio';

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        // Fetch HTML content from IMDb's popular movies page
        const response = await fetch('https://www.imdb.com/chart/moviemeter/');
        const html = await response.text();
       const res=await response.json()
       console.log(res)
        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        // Select the elements containing movie titles
        const movieTitles = $('.lister-list tr .titleColumn a')
          .map((_, element) => $(element).text())
          .get();

        // Update state with movie titles
        setMovies(movieTitles);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    }

    fetchPopularMovies();
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
