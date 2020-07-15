import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const graphQLFacadeService: any = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
    }),
    cache: new InMemoryCache(),
  });
};
