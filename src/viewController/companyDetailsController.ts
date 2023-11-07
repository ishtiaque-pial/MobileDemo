import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuth} from '../store/slices/authSlice';
import {selectCompaniesData} from '../store/slices/companyDetailsSlice';
import companyDetailsAsync from '../store/thunk/companyDetailsThunk';

const useCompanyDataController = param => {
  interface CompanyCredentials {
    company_id: string;
    token: string;
  }
  const dispatch = useDispatch<any>();
  const {loading, companyData, errorData} = useSelector(selectCompaniesData);
  const {token} = useSelector(selectAuth);

  useEffect(() => {
    const companyCredentials: CompanyCredentials = {
      company_id: param?.id,
      token: token ? token : '',
    };
    dispatch(companyDetailsAsync(companyCredentials));
  }, [param, token, dispatch]);

  return {
    loading,
    companyData,
    errorData,
  };
};

export default useCompanyDataController;
