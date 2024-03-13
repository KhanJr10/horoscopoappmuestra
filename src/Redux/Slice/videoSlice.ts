import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IVideo} from '../../Services/interfaces';

const initialState: IVideo = {
  id: 0,
  url: '',
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<IVideo>) => {
      const data = action.payload;
      state.id = data.id;
      state.url = data.url;
    },
  },
});

export const {addVideo} = videoSlice.actions;
export default videoSlice.reducer;
