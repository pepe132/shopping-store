import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { cartReducer } from "../reducers/cartReducer";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer
  }
})