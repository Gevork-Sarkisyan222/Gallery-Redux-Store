// slices/isCheckedSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChecked: {},
};

export const isCheckedSlice = createSlice({
  name: 'isChecked',
  initialState,
  reducers: {
    setIsChecked: (state, action) => {
      const { id, value } = action.payload;
      state.isChecked[id] = value;
      localStorage.setItem(`isChecked-${id}`, JSON.stringify(value));
    },
    setIsCheckedClearAll: (state) => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('isChecked-')) {
          localStorage.removeItem(key);
        }
      });

      state.isChecked = {};
    },
    initializeStateFromLocalStorage: (state) => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('isChecked-')) {
          const id = key.split('-')[1];
          state.isChecked[id] = JSON.parse(localStorage.getItem(key));
        }
      });
    },
  },
});

export const { setIsChecked, setIsCheckedClearAll, initializeStateFromLocalStorage } =
  isCheckedSlice.actions;
export default isCheckedSlice.reducer;
