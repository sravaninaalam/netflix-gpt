import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        isShowGpt:false,
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.isShowGpt=!state.isShowGpt
        }
    }
})
export default gptSlice.reducer
export const {toggleGPTSearch}= gptSlice.actions