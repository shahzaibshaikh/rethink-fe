import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Error,
  FolderData,
  FolderInfo,
  FolderState
} from '../../interfaces/FolderInterfaces';

const initialState: FolderState = {
  loading: false,
  error: null,
  data: null
};

const folderSlice: any = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setAllFolders: (state: any, action: PayloadAction<FolderInfo[]>) => {
      state.data = {
        ...state.data,
        folders: action.payload
      };
      state.error = null;
    },
    setSelectedFolder: (state: any, action: PayloadAction<string>) => {
      state.data = {
        ...state.data,
        selectedFolder: action.payload
      };
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = folderSlice.actions;

export default folderSlice.reducer;
