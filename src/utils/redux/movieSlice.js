import {createSlice} from '@reduxjs/toolkit'
const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addPopularTVSeries:(state,action)=>{
            state.popularTVSeries=action.payload
        },
        addTopRatedTVSeries:(state,action)=>{
            state.topRatedTVSeries=action.payload
        },
        addMovieInfo:(state,action)=>{
            state.movieInfo=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
    
})
export const 
{addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addPopularTVSeries
,addTopRatedTVSeries,addMovieInfo} =movieSlice.actions
export default movieSlice.reducer