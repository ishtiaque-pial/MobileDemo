import {gql, GraphQLClient} from 'graphql-request';
import store from '../store';

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

const token = store.getState().auth.token;
export const client = new GraphQLClient(
  'https://zgzjtmqrfng43iyc3slad3dfyi.appsync-api.eu-west-1.amazonaws.com/graphql',
);

client.setHeaders({
  'x-api-key': token ? token : '',
});
