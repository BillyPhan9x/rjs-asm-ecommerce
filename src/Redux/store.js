import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/category-slice";
import popupReducer from "./slices/popup-slice";
import authReducer from "./slices/auth-slice";
import userReducer from "./slices/user_slice";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    category: categoriesReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
