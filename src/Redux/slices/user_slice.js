import { createSlice } from "@reduxjs/toolkit";

const userLoged = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialUserState = { user: userLoged };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    ON_LOGIN(state, action) {
      state.user = action.payload;
    },

    ON_LOGOUT(state) {
      state.user = userLoged || null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
