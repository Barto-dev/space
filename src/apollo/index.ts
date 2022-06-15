import {
  ApolloClient,
  HttpLink,
  HttpOptions,
  InMemoryCache,
} from '@apollo/client';

const httpLinkConfig: HttpOptions = {
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  credentials: 'same-origin',
};

const httpLink = new HttpLink(httpLinkConfig);

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
