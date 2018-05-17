import React, { Component } from 'react';
import StackNavigator from './navigation/Navigator';
import { ApolloProvider } from 'react-apollo';
import { client } from './graphql/GQLClient';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <StackNavigator />
      </ApolloProvider>
    );
  }
}

