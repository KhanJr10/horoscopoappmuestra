import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IDataHoroscopo, TZodialSings} from '../../Services/interfaces';

const initialState: IDataHoroscopo = {
  zodiac_signs: [
    {
      id: 0,
      name: '',
      init_date: '',
      end_date: '',
      prediction: '',
      image: '',
    },
  ],
};

export const horoscopoSlice = createSlice({
  name: 'horoscopo',
  initialState,
  reducers: {
    addHoroscopo: (state, action: PayloadAction<TZodialSings>) => {
      state.zodiac_signs = action.payload;
    },
  },
});

export const {addHoroscopo} = horoscopoSlice.actions;
export default horoscopoSlice.reducer;
