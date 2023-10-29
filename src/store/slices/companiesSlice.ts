import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import api from '../../api/api';
import {Company} from '../../types/companyListType';

interface CompaniesListState {
  companies: Array<Company>;
  loading: boolean;
  error: string | null;
}

const initialState: CompaniesListState = {
  companies: [],
  loading: false,
  error: null,
};

export const companyListAsync = createAsyncThunk(
  'company/CompanyList',
  async () => {
    try {
      const response = await api.get('/companies');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(companyListAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(companyListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
        state.error = null;
      })

      .addCase(companyListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  },
});

export const selectCompaniesList = (state: {companies: CompaniesListState}) =>
  state.companies;
export default companySlice.reducer;
