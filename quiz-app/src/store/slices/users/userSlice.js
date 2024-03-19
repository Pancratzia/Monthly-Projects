
import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  error: "",
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialUser,
  reducers: {
    SET_ERROR: (state, { payload }) => {
      state.error = payload;
    },
    CLEAR_ERROR: (state) => {
      state.error = '';
    }
  }
});

export const { SET_ERROR, CLEAR_ERROR } = userSlice.actions;