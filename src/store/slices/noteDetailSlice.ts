import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, NoteInfo, NoteState } from '../../interfaces/NoteInterface';

const initialState: NoteState = {
  loading: false,
  error: null,
  data: null
};

const noteDetailSlice: any = createSlice({
  name: 'noteDetail',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state: any, action: PayloadAction<NoteInfo>) => {
      state.data = action.payload;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = noteDetailSlice.actions;

export default noteDetailSlice.reducer;
