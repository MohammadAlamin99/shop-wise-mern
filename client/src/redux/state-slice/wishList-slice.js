import { createSlice } from '@reduxjs/toolkit'

export const wishListSlice = createSlice({
  name: 'wish',
  initialState: {
    wish: [],
  },
  reducers: {
    setWish:(state, action)=>{
        state.wish =action.payload;
    }
  },
})

export const {setWish} = wishListSlice.actions

export default wishListSlice.reducer