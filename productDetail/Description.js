// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Accordion } from 'native-base';


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
      const data = [{ title: 'Description', content: this.props.description }];
      return (
        <View>
          {/*<Accordion dataArray={data} />*/}
        </View>
      );
    }
}
