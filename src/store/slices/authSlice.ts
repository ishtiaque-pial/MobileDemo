import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api/api';
import {storeData} from '../../storage/storage';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: {email: string; password: string}) => {
    try {
      const response = await api.post('/login', credentials);
      storeData('token', response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const selectAuth = (state: {auth: AuthState}) => state.auth;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
