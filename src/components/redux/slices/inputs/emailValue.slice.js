import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailValue: '',
};

export const emailValue = createSlice({
  name: 'emailValue',
  initialState,
  reducers: {
    setEmailValue: (state, action) => {
      state.emailValue = action.payload;
    },
  },
});

export const { setEmailValue } = emailValue.actions;

export default emailValue.reducer;
