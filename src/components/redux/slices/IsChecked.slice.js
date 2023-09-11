import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const isChecked = createSlice({
  name: 'checked',
  initialState,
  reducers: {
    setIsCheckedTrue(state, action) {
      const { id } = action.payload;
      state[id] = true;
    },
    setIsCheckedFalse(state, action) {
      const { id } = action.payload;
      state[id] = false;
    },
    setIsCheckedClearAll(state) {
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
    },
  },
});

export const { setIsCheckedTrue, setIsCheckedFalse, setIsCheckedClearAll } = isChecked.actions;

export default isChecked.reducer;
