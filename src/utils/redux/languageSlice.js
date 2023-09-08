import {createSlice} from '@reduxjs/toolkit'
const languageSlice=createSlice({
    name:'lang',
    initialState:{
        defaultlang:'en'
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.defaultlang=action.payload
        }
    }
})

export const{changeLanguage}=languageSlice.actions
export default languageSlice.reducer