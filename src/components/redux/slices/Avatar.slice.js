import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStw4F_VGb98pxF254okf1UGvExggvbGB0hbCMSLdjYAxxtc5Udw1QW2CDb_TrODnCfOXw&usqp=CAU',
  notChangedAvatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStw4F_VGb98pxF254okf1UGvExggvbGB0hbCMSLdjYAxxtc5Udw1QW2CDb_TrODnCfOXw&usqp=CAU',
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setChangeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setDeleteAvatar: (state) => {
      state.avatar = state.notChangedAvatar;
    },
  },
});

export const { setChangeAvatar, setDeleteAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;
