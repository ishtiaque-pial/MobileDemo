import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {storeData} from '../storage/storage';
import {loginAsync, selectAuth} from '../store/slices/authSlice';

const useLoginController = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const {loading, token} = useSelector(selectAuth);
  const [errorState, setErrorState] = useState('');

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

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
    try {
      await schema.validate(credentials, {abortEarly: false});
      dispatch(loginAsync(credentials));
    } catch (errors: any) {
      errors.inner.forEach((error: any) => {
        setErrorState(error.message);
      });
    }
  };
  return {
    loading,
    token,
    signIn,
    credentials,
    setCredentials,
    errorState,
  };
};

export default useLoginController;
