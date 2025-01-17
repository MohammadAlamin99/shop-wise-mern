import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../state-slice/product-slice";
import categorySlice from "../state-slice/category-slice";

const store = configureStore({
  reducer: {
    getProduct:productSlice,
    getCategory:categorySlice
  },
});

export default store;
