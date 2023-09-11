import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTrue: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTrue(state) {
      state.isTrue = true;
    },
    setFalse(state) {
      state.isTrue = false;
    },
  },
});

export const { setTrue, setFalse } = counterSlice.actions;

export default counterSlice.reducer;
