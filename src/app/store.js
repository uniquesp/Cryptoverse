import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        // Concatenate the RTK Query middleware to the default middleware chain
        getDefaultMiddleware().concat(cryptoApi.middleware),
  });