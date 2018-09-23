// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Accordion } from 'native-base';
import { paddingMedium, paddingSmall, topSeparator } from '../config/Styles';

type Props = {
    // navigation: any,
    description: string
}

export default function Description(props: Props) {
  const data = [{ title: 'Description', content: props.description }];
  return <View style={{ ...topSeparator, paddingTop: paddingSmall }}><Accordion dataArray={data} icon="add" expandedIcon="remove" /></View>;
}
