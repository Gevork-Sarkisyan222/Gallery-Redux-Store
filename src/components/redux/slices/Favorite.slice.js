import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: JSON.parse(localStorage.getItem('favoriteItems')) || [],
};

export const favoriteItems = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteItems: (state, action) => {
      state.favoriteItems.push(action.payload);
      localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
    },
    removeFavoriteItems: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
      localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
    },
  },
});

export const { addFavoriteItems, removeFavoriteItems } = favoriteItems.actions;

export default favoriteItems.reducer;
