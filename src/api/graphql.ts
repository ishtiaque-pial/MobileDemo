import {gql} from 'graphql-request';

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
