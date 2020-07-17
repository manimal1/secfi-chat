import { ApolloClient } from '@apollo/client';

import { cache } from './cache';

export const graphQLFacadeService: any = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: cache,
});
