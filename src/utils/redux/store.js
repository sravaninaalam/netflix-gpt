import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import gptSlice from './gptSlice'
import languageSlice from './languageSlice'
import networkSlice from './networkSlice'
const store=configureStore({

    reducer:{
      user:userSlice,
      movies:movieSlice,
      gpt:gptSlice,
      lang:languageSlice,
      network:networkSlice
    }
})
export default store