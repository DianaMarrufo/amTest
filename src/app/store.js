import { configureStore } from '@reduxjs/toolkit';
import characterSlice from '../features/characters/characterSlice';

export const store = configureStore({
  reducer: {
    character: characterSlice,
  },
});
