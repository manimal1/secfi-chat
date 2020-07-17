import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphQLFacadeService: any = () => {
  return new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
    // headers: {
    //   Authorization: `Bearer ${authToken}`,
    // },
  });
};
