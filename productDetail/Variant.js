// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, H3 } from 'native-base';


type Props = {
    navigation: any,
    variants: any
}

type State = {
    // slug: string
}

// Takes in props from query
// retains state about selected item
// can take selected item in state and add to basket

export default class Variant extends React.Component<Props, State> {
    state = {};

    renderOptions() {

    }

    renderVariants() {
      return this.props.variants.map((variant) => (<Text>{variant.title}</Text>));
    }

    render() {
      return (
        <View>
          {this.renderVariants()}
        </View>
      );
    }
}
