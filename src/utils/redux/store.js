import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import gptSlice from './gptSlice'
import languageSlice from './languageSlice'
const store=configureStore({

    reducer:{
      user:userSlice,
      movies:movieSlice,
      gpt:gptSlice,
      lang:languageSlice
    }
})
export default store