import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { dispatch } from 'react-redux'

const fetchByConfig = createAsyncThunk(
  'current/fetchByConfig',
  async (payload, { dispatch }) => {
    let { reqUrl, reqConfig } = payload;
    let reqConfigCopy = {...reqConfig};
    console.log(payload)
    try {
      if (typeof reqConfig.headers === 'string' && reqConfig.headers!=='') {
        reqConfigCopy.headers = JSON.parse(reqConfig.headers)
      }
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await fetch(reqUrl,reqConfigCopy).then(res => res.text());
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      // return Promise.resolve(0);
    }
  }
)

// one file mapping to one logic feature, basically.
// https://redux-toolkit.js.org/usage/usage-guide
export const currentSlice = createSlice({
  name: 'current',
  initialState: {
    reqUrl: 'https://jsonplaceholder.typicode.com/posts?userId=1',
    reqConfig: {
      method: 'GET',
      headers: `{
  "Content-Type": "application/json"
}`,
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