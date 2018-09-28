import ApolloClient from 'apollo-boost';
import { API_URL } from '../config/api';
import { clientState } from './clientState';


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'cache-and-network', //'network-only',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  uri: API_URL,
  defaultOptions,
  clientState,
});
