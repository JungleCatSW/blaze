// @flow
import React from 'react';
import { View } from 'react-native';
import { H3 } from 'native-base';

type Props = {
    title: string,
    subTitle: string
}

export default function Title(props: Props) {
  return (<View><H3>{`${props.title} ${props.subTitle}`}</H3></View>);
}
