import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openInfo: {},
};

export const openImageInfoSlice = createSlice({
  name: 'ImageInfo',
  initialState,
  reducers: {
    setOpenInfo: (state, action) => {
      state.openInfo[action.payload.id] = true;
    },
    setCloseInfo: (state, action) => {
      state.openInfo[action.payload.id] = false;
    },
  },
});

export const { setOpenInfo, setCloseInfo } = openImageInfoSlice.actions;

export default openImageInfoSlice.reducer;
