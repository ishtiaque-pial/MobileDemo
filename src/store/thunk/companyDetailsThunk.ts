import {createAsyncThunk} from '@reduxjs/toolkit';
import {client, GET_COMAPNAY} from '../../api';
import {Data} from '../../types/companyDetails';

const companyDetailsAsync = createAsyncThunk(
  'company/CompanyDetails',
  async (companyCredentials: {company_id: string; token: string}) => {
    try {
      const variables = {
        id: companyCredentials.company_id,
      };
      const data = await client.request<Data>(GET_COMAPNAY, variables);
      return data.getCompany;
    } catch (error) {
      throw error;
    }
  },
);

export default companyDetailsAsync;
