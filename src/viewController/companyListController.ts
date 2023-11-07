import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../routes';
import {removeData} from '../storage/storage';
import {logout} from '../store/slices/authSlice';
import {selectCompaniesList} from '../store/slices/companiesSlice';
import companyListAsync from '../store/thunk/companyListThunk';
import {Company} from '../types/companyListType';

type CompanyListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CompaniesList'
>;

const useCompanyListController = () => {
  const navigation = useNavigation<CompanyListNavigationProp>();
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
