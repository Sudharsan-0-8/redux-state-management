import { createSlice } from '@reduxjs/toolkit';

const initState = { 
    userName: '', 
    name: '',
    email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initState },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    unsetUser: (state, action) => {
      state.value = initState;
    }
  }
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
