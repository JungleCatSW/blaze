// @flow
import React from 'react';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';

type Props = {
    navigation: any,
}

export default class ProductListScreen extends React.Component<Props> {
  render() {
    return (
      <Anatomy
        leftButtonIsDrawer={false}
        title="from params"
        navigation={this.props.navigation}
      >
        <Text>Productlist screen</Text>
      </Anatomy>
    );
  }
}

