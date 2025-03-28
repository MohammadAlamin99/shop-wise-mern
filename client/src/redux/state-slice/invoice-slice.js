import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoice: [],
  },
  reducers: {
    setInvoice:(state, action)=>{
        state.invoice =action.payload;
    }
  },
})

export const {setInvoice} = invoiceSlice.actions

export default invoiceSlice.reducer