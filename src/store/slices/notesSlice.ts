import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, NoteInfo, NoteState } from '../../interfaces/NoteInterface';

const initialState: NoteState = {
  loading: false,
  error: null,
  data: null
};

const notesSlice: any = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state: any, action: PayloadAction<NoteInfo[]>) => {
      state.data = action.payload;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = notesSlice.actions;

export default notesSlice.reducer;
