import { configureStore } from '@reduxjs/toolkit';
import counterCart from './slices/CounterCart.slice';
import openCart from './slices/OpenCart.slice';
import openSuccsess from './slices/OpenSuccsess.slice';
import value from './slices/Value.slice';
import cartItems from './slices/HandleCart.slice';
import isChecked from './slices/IsChecked.slice';
import isLoading from './slices/isLoading.slice';
import artistData from './slices/ArtistData.slice';
import avatar from './slices/Avatar.slice';
import openInfoCard from './slices/OpenImageInfo.slice';
import nameValue from './slices/inputs/nameValue.slice';
import surnameValue from './slices/inputs/surnameValue.slice';
import emailValue from './slices/inputs/emailValue.slice';
import openAccaunt from './slices/openAccaunt.slice';
import favoriteItems from './slices/Favorite.slice';

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
    avatar,
    openInfoCard,
    nameValue,
    surnameValue,
    emailValue,
    openAccaunt,
    favoriteItems,
  },
});
