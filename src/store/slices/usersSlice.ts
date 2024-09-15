import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, User, UserState } from '../../interfaces/UserInterfaces';

const initialState: UserState = {
  loading: false,
  error: null,
  data: null
};

const usersSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.error = null;
    },
    logoutUser: (state, action: PayloadAction) => {
      state.data = null;
    }
  }
});

export const { setLoading, setError, setUser } = usersSlice.actions;

export default usersSlice.reducer;
