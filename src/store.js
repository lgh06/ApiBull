import { configureStore } from '@reduxjs/toolkit'
import player from './reducers/playerSlice'
import current from './reducers/currentSlice'

// https://redux-toolkit.js.org/usage/usage-guide
export default configureStore({
  reducer: {
    player,
    current,
  },
})