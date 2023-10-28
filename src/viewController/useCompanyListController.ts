import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../storage/storage';
import {logout} from '../store/slices/authSlice';
import {
  companyListAsync,
  selectCompaniesList,
} from '../store/slices/companiesSlice';
import {Company} from '../types/companyListType';

const useCompanyListController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const {loading, companies, error} = useSelector(selectCompaniesList);

  useEffect(() => {
    dispatch(companyListAsync());
  }, [dispatch]);

  const handleItemPress = async (item: Company) => {
    console.log('hhgjhg', 'hgjhjgjh');
    removeData('token');
    navigation.navigate('CompanyDetails', item.id);
  };

  const signOut = async () => {
    console.log('hhgjhg', 'hgjhjgjh');
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
