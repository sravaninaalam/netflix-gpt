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
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
    
})
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} =movieSlice.actions
export default movieSlice.reducer