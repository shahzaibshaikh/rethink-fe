import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from './slices/foldersSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    folders: foldersReducer
  }
});
