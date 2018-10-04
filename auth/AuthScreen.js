// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';

import { paddingMedium } from '../config/Styles';

import { signInWithToken } from './meteorAuth';



type Props = {
    navigation: any,
}
type State = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: paddingMedium,
    marginRight: paddingMedium,
  },
  page: {
    paddingTop: paddingMedium,
    paddingBottom: paddingMedium,
  },
});


export default class AuthScreen extends React.Component<Props, State> {
    state = {
    };

    componentDidMount() {
      signInWithToken();
    }

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title={this.state.tagName}
          navigation={this.props.navigation}
        >
          <View style={styles.page}>
            <Text>Auth</Text>
          </View>
        </Anatomy>
      );
    }
}

