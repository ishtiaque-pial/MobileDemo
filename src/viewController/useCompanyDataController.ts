import request from 'graphql-request';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GET_COMAPNAY, endpoint} from '../api/graphql';
import {retrieveData} from '../storage/storage';
import {
  fetchData,
  fetchError,
  fetchLoading,
  selectCompaniesData,
} from '../store/slices/companyDetailsSlice';
import {Data} from '../types/companyDetails';

const useCompanyDataController = param => {
  const dispatch = useDispatch<any>();
  const {loading, companyData, errorData} = useSelector(selectCompaniesData);

  useEffect(() => {
    dispatch(fetchLoading());
    const signOut = async () => {
      try {
        const authToken = await retrieveData('token');
        const variables = {
          id: param,
        };
        const requestHeaders = {
          'x-api-key': authToken ? authToken : '',
        };
        const data = await request<Data>(
          endpoint,
          GET_COMAPNAY,
          variables,
          requestHeaders,
        );
        dispatch(fetchData(data.getCompany));
      } catch (error: any) {
        dispatch(fetchError(error.message));
      }
    };
    signOut();
  }, [param, dispatch]);

  return {
    loading,
    companyData,
    errorData,
  };
};

export default useCompanyDataController;
