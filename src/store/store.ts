import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from './slices/foldersSlice';

export const store = configureStore({
  reducer: {
    folders: foldersReducer
  }
});
