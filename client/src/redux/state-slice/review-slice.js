import { createSlice } from '@reduxjs/toolkit'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    review: [],
  },
  reducers: {
    setReview:(state, action)=>{
        state.review =action.payload;
    }
  },
})

export const {setReview} = reviewSlice.actions

export default reviewSlice.reducer