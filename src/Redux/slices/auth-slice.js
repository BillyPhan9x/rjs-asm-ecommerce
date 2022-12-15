import { createSlice } from "@reduxjs/toolkit";

// Kiểm tra xem có user hiện tại có trong localStorage hay ko? Nếu ko thì trạng thái là false.
const isLogeded = JSON.parse(localStorage.getItem("currentUser")) || false;
const userLogged = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialAuthState = {
  isAuth: isLogeded ? true : false,
  user: userLogged,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  // đăng ký reducers là methods reducer có thể change state
  reducers: {
    // method để đăng nhập user
    ON_LOGIN(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    // method để đăng xuất user
    ON_LOGOUT(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
