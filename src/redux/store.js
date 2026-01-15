import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/baseApi";
import trainerRegisterReducer from "./features/trainerRegisterSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    trainerRegister: trainerRegisterReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
