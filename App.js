/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import StackNavigator from './navigation/Navigator';
import getTheme from './native-base-theme/components';
import whiteTheme from './config/whiteTheme';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={getTheme(whiteTheme)}>
        <StackNavigator />
      </StyleProvider>
    );
  }
}

