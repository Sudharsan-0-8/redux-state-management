import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: { value: { isLoggedIn: false } },
  reducers: {
    setLoginState: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setLoginState } = loginSlice.actions;

export default loginSlice.reducer;