import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        isShowGpt:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.isShowGpt=!state.isShowGpt
        },
        gptMovieResult:(state,action)=>{
            const{movieNames,results}=action.payload
            state.movieResults=results
            state.movieNames=movieNames
        }

    }
})
export default gptSlice.reducer
export const {toggleGPTSearch,gptMovieResult}= gptSlice.actions