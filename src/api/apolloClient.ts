import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from 'apollo-link-context';
import {retrieveData} from '../storage/storage';

const getToken = async () => {
  const token = await retrieveData('token');
  return token ? token : '';
};

const httpLink = createHttpLink({
  uri: 'https://zgzjtmqrfng43iyc3slad3dfyi.appsync-api.eu-west-1.amazonaws.com/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      'x-api-key': token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
