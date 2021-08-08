import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { dispatch } from 'react-redux'

const fetchByConfig = createAsyncThunk(
  'current/fetchByConfig',
  async (payload, { dispatch, getState }) => {
    const {reqUrl, reqMethod, reqHeader, reqBody } = payload;
    const response = await fetch(reqUrl,{

    })
    return response.data
  }
)

// one file mapping to one logic feature, basically.
// https://redux-toolkit.js.org/usage/usage-guide
export const currentSlice = createSlice({
  name: 'current',
  initialState: {
    reqUrl: '',
    reqConfig: {
      method: '',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null,
    },
    resHeader: '',
    resBody: '',
  },
  reducers: {
    setState: (state, action) => {
      const {key, value} = action.payload;
      state[key] = value;
    },
    setReqUrl: (state, action) => {
      if(typeof action.payload === 'string') {
        state.reqUrl = action.payload;
      }else{

      }
    },
    setReqConfig: (state, action) => {
      if(typeof action.payload === 'object') {
        Object.keys(action.payload).forEach(v => {
          // debugger
          state.reqConfig[v] = action.payload[v];
        });
      }else{
        
      }
      console.log(state.reqConfig)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setState, setReqUrl, setReqConfig } = currentSlice.actions

export default currentSlice.reducer