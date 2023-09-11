import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  find: '',
};

export const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setFind: (state, action) => {
      state.find = action.payload;
    },
  },
});

export const { setFind } = valueSlice.actions;

export default valueSlice.reducer;
