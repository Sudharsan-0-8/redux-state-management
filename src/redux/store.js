import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './features/login.js';
import userReducer from './features/user.js';

const store =configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  }
});

export default store;