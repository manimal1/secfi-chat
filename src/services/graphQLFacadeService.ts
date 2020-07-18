import { ApolloClient } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

import { cache } from './cache';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/v1/graphql`,
  options: {
    reconnect: true,
    // TODO: use for authorization when ready
    // connectionParams: {
    //   authToken: user.authToken,
    // },
  },
});

export const graphQLFacadeService: any = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  link: wsLink,
  cache,
});
