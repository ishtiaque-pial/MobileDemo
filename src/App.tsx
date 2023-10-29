import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import client from './api/apolloClient';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';
import {SignInScreen} from './screens/SignIn';
import {retrieveData} from './storage/storage';
import {login, selectAuth} from './store/slices/authSlice';
import store, {persistor} from './store/store';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
};

const AppWrapper = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(selectAuth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await retrieveData('token');
        if (token) {
          dispatch(login(token));
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          {...{initialRouteName: isLoggedIn ? 'CompaniesList' : 'SignIn'}}>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{title: 'Sign In'}}
          />
          <Stack.Screen
            name="CompaniesList"
            component={CompaniesListScreen}
            options={{
              title: 'Companies',
            }}
          />
          <Stack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
            options={{
              title: 'Company Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
