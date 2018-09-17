// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, H3 } from 'native-base';


type Props = {
    // navigation: any,
    description: string
}

type State = {
    expanded: boolean
}

// Should be expandable on tap if larger tha x lines
// in a non jerky way

export default class Description extends React.Component<Props, State> {
    state = {
      expanded: false,
    };
// https://docs.nativebase.io/Components.html#accordion-def-headref
    render() {
      return (
        <View>
          <Text>
            {this.props.description}
          </Text>
        </View>
      );
    }
}
