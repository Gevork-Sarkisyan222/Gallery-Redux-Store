import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus(state) {
      state.count += 1;
    },
    minus(state) {
      state.count -= 1;
    },
    deleteCounter(state) {
      state.count = 0;
    },
  },
});

export const { plus, minus, deleteCounter } = counterSlice.actions;

export default counterSlice.reducer;
