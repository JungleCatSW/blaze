import ApolloClient from 'apollo-boost';
import { API_URL } from '../config/api';


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  uri: API_URL,
  defaultOptions,
});
