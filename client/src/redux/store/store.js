import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../state-slice/product-slice";
import categorySlice from "../state-slice/category-slice";
import cartListSlice from "../state-slice/cartList-slice";
import invoiceSlice from "../state-slice/invoice-slice";
import userSlice from "../state-slice/user-slice";

const store = configureStore({
  reducer: {
    getProduct: productSlice,
    getCategory: categorySlice,
    getCartList: cartListSlice,
    getInvoiceList: invoiceSlice,
    getUserDetails: userSlice,
  },
});

export default store;
