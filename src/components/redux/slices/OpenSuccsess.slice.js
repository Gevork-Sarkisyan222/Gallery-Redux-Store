import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenSuccsess: false,
  openIt: [], //nothing gv
};

export const openSuccsess = createSlice({
  name: 'succsess',
  initialState,
  reducers: {
    makeOpenSuccsess(state) {
      state.isOpenSuccsess = true;
    },
  },
});

export const { makeOpenSuccsess } = openSuccsess.actions;

export default openSuccsess.reducer;
