import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';
import {SignInScreen} from './screens/SignIn';
import store, {persistor} from './store';
import {selectAuth} from './store/slices/authSlice';

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const linking = {
  prefixes: ['seedrsdemo://'],
  config: {
    initialRouteName: 'CompaniesList',
    screens: {
      SignIn: 'SignIn',
      CompaniesList: 'CompaniesList',
      CompanyDetails: 'CompanyDetails/:id',
    },
  },
};

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </PersistGate>
  );
};

const AppWrapper = () => {
  const {isLoggedIn} = useSelector(selectAuth);

  return (
    <NavigationContainer linking={linking}>
      {isLoggedIn ? (
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="CompaniesList"
            component={CompaniesListScreen}
            options={{
              title: 'Companies',
              headerBackTitle: '',
            }}
          />
          <HomeStack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
            options={{
              title: 'Company Details',
              headerBackTitleVisible: false,
            }}
          />
        </HomeStack.Navigator>
      ) : (
        <LoginStack.Navigator>
          <LoginStack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{title: 'Sign In'}}
          />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
};
