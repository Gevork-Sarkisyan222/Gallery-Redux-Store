import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const counterSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = counterSlice.actions;

export default counterSlice.reducer;
