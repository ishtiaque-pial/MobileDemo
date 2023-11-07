import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosClint} from '../../api';

const companyListAsync = createAsyncThunk('company/CompanyList', async () => {
  try {
    const response = await axiosClint.get('/companies');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export default companyListAsync;
