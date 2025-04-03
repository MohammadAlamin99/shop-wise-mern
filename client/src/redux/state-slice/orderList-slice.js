import { createSlice } from '@reduxjs/toolkit'

export const orderListSlice = createSlice({
  name: 'order',
  initialState: {
    order: [],
  },
  reducers: {
    setOrder:(state, action)=>{
        state.order =action.payload;
    }
  },
})

export const {setOrder} = orderListSlice.actions

export default orderListSlice.reducer