import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  surnameValue: '',
};

export const surnameValue = createSlice({
  name: 'nameValue',
  initialState,
  reducers: {
    setSurnameValue: (state, action) => {
      state.surnameValue = action.payload;
    },
  },
});

export const { setSurnameValue } = surnameValue.actions;

export default surnameValue.reducer;
