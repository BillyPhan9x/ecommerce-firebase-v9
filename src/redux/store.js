import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart-slice";

const sotre = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default sotre;
