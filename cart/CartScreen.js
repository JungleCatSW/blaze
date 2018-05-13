import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';


export default class CartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

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

CartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
