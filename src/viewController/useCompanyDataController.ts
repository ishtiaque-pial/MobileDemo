import request from 'graphql-request';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GET_COMAPNAY, endpoint} from '../api/graphql';
import {selectAuth} from '../store/slices/authSlice';
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
  const {token} = useSelector(selectAuth);

  useEffect(() => {
    dispatch(fetchLoading());
    const callGraphql = async () => {
      try {
        const variables = {
          id: param?.id,
        };
        const requestHeaders = {
          'x-api-key': token ? token : '',
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
    callGraphql();
  }, [param, token, dispatch]);

  return {
    loading,
    companyData,
    errorData,
  };
};

export default useCompanyDataController;
