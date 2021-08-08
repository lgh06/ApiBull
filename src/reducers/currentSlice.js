import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { dispatch } from 'react-redux'

const fetchByConfig = createAsyncThunk(
  'current/fetchByConfig',
  async (payload, { dispatch, getState }) => {
    const {reqUrl, reqMethod, reqHeader, reqBody } = payload;
    const response = await fetch(reqUrl)
    return response.data
  }
)

// one file mapping to one logic feature, basically.
// https://redux-toolkit.js.org/usage/usage-guide
export const currentSlice = createSlice({
  name: 'current',
  initialState: {
    speed: 10,
    innerHTML: 'You can paste or input texts here. <br/>你可以把文字粘贴在这里。或用输入法输入。',
    scrollHeight: 600, // whole pre height
    clientHeight: 1080, // one screen height,
    movedHeight: 0,
    playing:0,
    paused: 0,
    requestObject: {},
    resHeader: '',
    resBody: '',
  },
  reducers: {
    setState: (state, action) => {
      const {key, value} = action.payload;
      state[key] = value;
    },
    setReq: (state, action) => {
      const {reqUrl, reqMethod, reqHeader, reqBody} = action.payload;
      state.requestObject = {reqUrl, reqMethod, reqHeader, reqBody};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setState } = currentSlice.actions

export default currentSlice.reducer