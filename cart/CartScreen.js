import React from 'react';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';

type Props = {
  navigation: any,
}

export default class CartScreen extends React.Component<Props> {
  render() {
    return (
      <Anatomy
        leftButtonIsDrawer={false}
        title="My Cart"
        navigation={this.props.navigation}
      >
        <Text>My cart</Text>
      </Anatomy>
    );
  }
}

