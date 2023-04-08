import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from './slices/foldersSlice';
import notesReducer from './slices/notesSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    folders: foldersReducer,
    notes: notesReducer
  }
});
