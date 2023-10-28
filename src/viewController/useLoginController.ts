import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {storeData} from '../storage/storage';
import {loginAsync, selectAuth} from '../store/slices/authSlice';

const useLoginController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const {loading, token} = useSelector(selectAuth);

  const [credentials, setCredentials] = useState({
    email: 'shakib.alhasan@seedrs.com',
    password: 'password',
  });

  useEffect(() => {
    const saveToken = async (apiKey: string) => {
      await storeData('token', apiKey);
    };
    if (token) {
      saveToken(token);
      navigation.reset({
        index: 0,
        routes: [{name: 'CompaniesList'}],
      });
    }
  }, [token, navigation]);

  const signIn = async () => {
    dispatch(loginAsync(credentials));
  };
  return {
    loading,
    token,
    signIn,
    credentials,
    setCredentials,
  };
};

export default useLoginController;
