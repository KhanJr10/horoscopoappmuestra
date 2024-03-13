import {configureStore} from '@reduxjs/toolkit';
import horoscopoReducer from './Slice/horoscopoSlice';
import videoReducer from './Slice/videoSlice';
import itemSelectedReducer from './Slice/itemSelectedSlice';
import scrollListReducer from './Slice/scrollList';

export const store = configureStore({
  reducer: {
    horoscopo: horoscopoReducer,
    video: videoReducer,
    itemSelecter: itemSelectedReducer,
    position: scrollListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
