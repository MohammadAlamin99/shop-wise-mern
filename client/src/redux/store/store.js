import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../state-slice/product-slice";
import categorySlice from "../state-slice/category-slice";
import cartListSlice from "../state-slice/cartList-slice";

const store = configureStore({
  reducer: {
    getProduct:productSlice,
    getCategory:categorySlice,
    getCartList: cartListSlice,
  },
});

export default store;
