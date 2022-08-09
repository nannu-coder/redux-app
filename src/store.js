import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/Cart/CartSlice";
import ModalReducer from "./Features/Modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
});
