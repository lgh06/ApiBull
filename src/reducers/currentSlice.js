import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { dispatch } from 'react-redux'

const fetchByConfig = createAsyncThunk(
  'current/fetchByConfig',
  async (payload, { dispatch }) => {
    const { reqUrl, reqConfig } = payload;
    const response = await fetch(reqUrl,reqConfig).then(res => res.json());
    console.log(response)
    return response
  }
)

// one file mapping to one logic feature, basically.
// https://redux-toolkit.js.org/usage/usage-guide
export const currentSlice = createSlice({
  name: 'current',
  initialState: {
    reqUrl: '',
    reqConfig: {
      method: 'GET',
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
          const configField = String(v).split('.')[1];
          // debugger
          if (configField === 'headers' &&  !String(action.payload[v]).startsWith('{') ) {
            return
          }
          state.reqConfig[configField] = action.payload[v];
        });
      }else{
        
      }
      console.log(state.reqConfig)
    },
  },
  extraReducers:{
    [fetchByConfig.fulfilled]: (state, action) => {}
  }
})

// Action creators are generated for each case reducer function
export const { setState, setReqUrl, setReqConfig } = currentSlice.actions
export { fetchByConfig }

export default currentSlice.reducer