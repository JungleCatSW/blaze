import ApolloClient from 'apollo-boost';
import { API_URL } from '../config/api';

const client = new ApolloClient({
  uri: API_URL,
});
