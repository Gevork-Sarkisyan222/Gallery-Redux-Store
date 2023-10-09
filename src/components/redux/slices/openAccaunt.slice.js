import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openAccaunt: false,
};

export const openAccaunt = createSlice({
  name: 'accaunt',
  initialState,
  reducers: {
    setOpenAccaunt: (state) => {
      state.openAccaunt = true;
    },
    setCloseAccaunt: (state) => {
      state.openAccaunt = false;
    },
  },
});

export const { setOpenAccaunt, setCloseAccaunt } = openAccaunt.actions;

export default openAccaunt.reducer;
