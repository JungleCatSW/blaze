import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import StackNavigator from './navigation/Navigator';
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

