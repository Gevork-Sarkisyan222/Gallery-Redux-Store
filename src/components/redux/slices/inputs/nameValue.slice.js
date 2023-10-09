import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameValue: '',
};

export const nameValue = createSlice({
  name: 'nameValue',
  initialState,
  reducers: {
    setNameValue: (state, action) => {
      state.nameValue = action.payload;
    },
  },
});

export const { setNameValue } = nameValue.actions;

export default nameValue.reducer;
