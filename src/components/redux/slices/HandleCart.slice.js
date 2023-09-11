import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartItems = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartItems.actions;

export default cartItems.reducer;
