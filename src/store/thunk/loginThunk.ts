import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosClint} from '../../api';
import {storeData} from '../../storage/storage';

const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: {email: string; password: string}) => {
    try {
      const response = await axiosClint.post('/login', credentials);
      storeData('token', response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export default loginAsync;
