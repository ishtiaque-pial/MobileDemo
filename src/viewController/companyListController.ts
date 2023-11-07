import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../storage/storage';
import {logout} from '../store/slices/authSlice';
import {selectCompaniesList} from '../store/slices/companiesSlice';
import companyListAsync from '../store/thunk/companyListThunk';
import {Company} from '../types/companyListType';

const useCompanyListController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const {loading, companies, error} = useSelector(selectCompaniesList);

  useEffect(() => {
    dispatch(companyListAsync());
  }, [dispatch]);

  const handleItemPress = async (item: Company) => {
    navigation.navigate('CompanyDetails', {id: item.id});
  };

  const signOut = async () => {
    await removeData('token');
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  return {
    loading,
    companies,
    handleItemPress,
    error,
    signOut,
  };
};

export default useCompanyListController;
