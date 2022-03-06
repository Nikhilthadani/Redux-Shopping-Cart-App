// Create a slice for auth and export both action and authSlice

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedin: false },
  reducers: {
    login(state) {
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
