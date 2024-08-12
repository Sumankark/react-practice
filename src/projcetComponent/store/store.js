import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../features/infoSlice";
import addressSlice from "../features/addressSlice";
import productSlice from "../features/productSlice";
import { productApi } from "../services/api/productService";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    address: addressSlice,
    product: productSlice,

    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
