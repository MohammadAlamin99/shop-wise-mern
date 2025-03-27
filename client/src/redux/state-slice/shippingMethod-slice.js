import { createSlice } from '@reduxjs/toolkit'

export const shippingMethodSlice = createSlice({
  name: 'shippingMethod',
  initialState: {
    shippingMethod: "outside",
  },
  reducers: {
    setShippingMethod:(state, action)=>{
        state.shippingMethod =action.payload;
    }
  },
})

export const {setShippingMethod} = shippingMethodSlice.actions

export default shippingMethodSlice.reducer