// configure store get the auth reducer and export store

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
