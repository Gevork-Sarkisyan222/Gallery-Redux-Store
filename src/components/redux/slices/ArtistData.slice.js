import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArtists = createAsyncThunk('data/fetchArtists', async () => {
  try {
    const respone = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await respone.json();

    const userImages = [
      'https://meragor.com/files/styles//220_220_bottom_wm/avatar-212449-003933.png',
      'https://meragor.com/files/styles//220_220_bottom_wm/lico-na-avu-085.jpg',
      'https://meragor.com/files/styles//220_220_bottom_wm/6_5.jpg',
      'https://meragor.com/files/styles//220_220_bottom_wm/avatar-211622-000709.png',
      'https://meragor.com/files/styles//220_220_bottom_wm/mujiki-na-avu-051.jpg',
      'https://meragor.com/files/styles//220_220_bottom_wm/avatar-216667-052269.png',
      'https://meragor.com/files/styles//220_220_bottom_wm/avatar-209909-004630.png',
      'https://meragor.com/files/styles//220_220_bottom_wm/avatar-209919-004890.png',
      'https://meragor.com/files/styles//220_220_bottom_wm/mujiki-na-avu-041.jpg',
      'https://meragor.com/files/styles//220_220_bottom_wm/parni-na-avu-089.jpg',
    ];

    const usersWithImages = json.map((user, index) => ({
      ...user,
      image: userImages[index] || 'https://example.com/default-image.jpg',
    }));

    return usersWithImages;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  userData: [],
  staus: 'loading',
};

export const artistData = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArtists.pending]: (state) => {
      console.log('загружаем данные....');
      state.staus = 'loading';
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.userData = action.payload;
      console.log('всё чётко получено!!');
      console.table(state);
      state.status = 'success';
    },
    [fetchArtists.rejected]: (state, error) => {
      console.log('ОШИБКА ПРИ ПОЛУЧЕНИИ ДАННЫX');
      console.warn(error);
      state.userData = [];
      state.status = 'error';
    },
  },
});

export default artistData.reducer;
