import { configureStore } from '@reduxjs/toolkit';
import counterCart from './slices/CounterCart.slice';
import openCart from './slices/OpenCart.slice';
import openSuccsess from './slices/OpenSuccsess.slice';
import value from './slices/Value.slice';
import cartItems from './slices/HandleCart.slice';
import isChecked from './slices/IsChecked.slice';
import isLoading from './slices/isLoading.slice';
import artistData from './slices/ArtistData.slice';

export const store = configureStore({
  reducer: {
    counterCart,
    openCart,
    openSuccsess,
    value,
    cartItems,
    isChecked,
    isLoading,
    artistData,
  },
});