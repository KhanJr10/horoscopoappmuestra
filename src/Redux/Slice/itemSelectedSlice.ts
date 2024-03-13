import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IItemSelected, IZodialSings} from '../../Services/interfaces';

const initialState: IItemSelected = {
  itemSelected: null,
};

export const itemSelectedSlice = createSlice({
  name: 'itemSelected',
  initialState,
  reducers: {
    addItemSelected: (state, action: PayloadAction<IZodialSings>) => {
      state.itemSelected = action.payload;
    },
  },
});

export const {addItemSelected} = itemSelectedSlice.actions;
export default itemSelectedSlice.reducer;
