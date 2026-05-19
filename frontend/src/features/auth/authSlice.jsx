import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userInfo: userFromStorage,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    loginSuccess: (state, action) => {

      state.userInfo = action.payload;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {

      state.userInfo = null;

      localStorage.removeItem("user");
    },
  },
});

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;