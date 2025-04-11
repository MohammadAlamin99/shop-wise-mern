// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "../state-slice/product-slice";
// import categorySlice from "../state-slice/category-slice";
// import cartListSlice from "../state-slice/cartList-slice";
// import invoiceSlice from "../state-slice/invoice-slice";
// import userSlice from "../state-slice/user-slice";

// const store = configureStore({
//   reducer: {
//     getProduct: productSlice,
//     getCategory: categorySlice,
//     getCartList: cartListSlice,
//     getInvoiceList: invoiceSlice,
//     getUserDetails: userSlice,
//   },
// });


// export default store;


import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../state-slice/product-slice";
import categorySlice from "../state-slice/category-slice";
import cartListSlice from "../state-slice/cartList-slice";
import invoiceSlice from "../state-slice/invoice-slice";
import userSlice from "../state-slice/user-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { combineReducers } from "redux";
import orderListSlice from "../state-slice/orderList-slice";
import wishListSlice from "../state-slice/wishList-slice";
import searchSlice from "../state-slice/search-slice";

// Combine reducers
const rootReducer = combineReducers({
  getProduct: productSlice,
  getCategory: categorySlice,
  getCartList: cartListSlice,
  getInvoiceList: invoiceSlice,
  getUserDetails: userSlice, // ✅ Persisting this slice
  getOrderList: orderListSlice,
  getWishList: wishListSlice,
  getSearch: searchSlice,
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["getUserDetails"], // ✅ Only persist user details
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);
export default store;
