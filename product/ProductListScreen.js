// @flow
import React from 'react';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';

type Props = {
    navigation: any,
}

export default class ProductListScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.tag = this.props.navigation.getParam('tag', null);
    this.tagName = this.props.navigation.getParam('tagName', '');
  }
  render() {
    return (
      <Anatomy
        leftButtonIsDrawer={false}
        title={this.tagName}
        navigation={this.props.navigation}
      >
        <Text>Productlist screen {this.tag} {this.tagName}</Text>
      </Anatomy>
    );
  }
}

