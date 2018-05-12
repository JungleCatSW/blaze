import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from "../ui/Anatomy";


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (<Anatomy leftButtonIsDrawer><Text>HomeScreen</Text></Anatomy>);
  }
}
