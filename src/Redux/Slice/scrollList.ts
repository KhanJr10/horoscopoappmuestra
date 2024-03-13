import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IPositionScroll} from '../../Services/interfaces';

const initialState: IPositionScroll = {
  horizontal: false,
};

export const scrollList = createSlice({
  name: 'scrollList',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<boolean>) => {
      state.horizontal = action.payload;
    },
  },
});

export const {changePosition} = scrollList.actions;
export default scrollList.reducer;
