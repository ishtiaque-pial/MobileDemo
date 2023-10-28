import {gql, RequestMiddleware} from 'graphql-request';
import {retrieveData} from '../storage/storage';

const getAccessToken = async () => {
  const token = await retrieveData('token');
  return token ? token : '';
};
export const requestMiddleware: RequestMiddleware = async request => {
  return {
    ...request,
    headers: {
      ...request.headers,
      'x-api-key': await getAccessToken(),
    },
  };
};

export const GET_COMAPNAY = gql`
  query GetCompany($id: String!) {
    getCompany(id: $id) {
      id
      name
      description
      coverImageUrl
      logoUrl
      investmentRaised
      investmentSought
      numberOfInvestors
      percentageRaised
      endDate
      valuation
      country
      city
      updates {
        items {
          id
          title
          body
          createdAt
        }
      }
    }
  }
`;
export const endpoint =
  'https://zgzjtmqrfng43iyc3slad3dfyi.appsync-api.eu-west-1.amazonaws.com/graphql';
