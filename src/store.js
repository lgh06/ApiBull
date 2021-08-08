import { configureStore } from '@reduxjs/toolkit'
import player from './reducers/playerSlice'
import status from './reducers/currentSlice'

// https://redux-toolkit.js.org/usage/usage-guide
export default configureStore({
  reducer: {
    player,
    status,
  },
})