import { createSlice } from '@reduxjs/toolkit'
// import { dispatch } from 'react-redux'

// one file mapping to one logic feature, basically.
// https://redux-toolkit.js.org/usage/usage-guide
export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    speed: 10,
    innerHTML: 'You can paste or input texts here. <br/>你可以把文字粘贴在这里。或用输入法输入。',
    scrollHeight: 600, // whole pre height
    clientHeight: 1080, // one screen height,
    movedHeight: 0,
    playing:0,
    paused: 0,
  },
  reducers: {
    setState: (state, action) => {
      const {key, value} = action.payload;
      state[key] = value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setState } = statusSlice.actions

export default statusSlice.reducer