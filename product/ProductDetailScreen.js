// @flow
import React from 'react';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';

type Props = {
    navigation: any,
}

type State = {
    id: string
}

export default class ProductDetailScreen extends React.Component<Props, State> {
    state = {
      id: this.props.navigation.getParam('id', null),
    };

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title="Detail"
          navigation={this.props.navigation}
        >
          <Text>ProductDetail screen</Text>
        </Anatomy>
      );
    }
}

