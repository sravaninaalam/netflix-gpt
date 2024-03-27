import { createSlice } from "@reduxjs/toolkit";
const networkSlice=createSlice({
    name:'network',
    initialState:{
        network_type:''
    },
    reducers:{
       findNetwork:(state,action)=>{
                state.network_type= action.payload
       }
    }
})
export const {findNetwork}=networkSlice.actions
export default networkSlice.reducer