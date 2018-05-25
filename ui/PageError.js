// @flow
import React from 'react';
import { View } from 'react-native';
import { H2 } from 'native-base';


type Props = {
    error: Object,
}

const errorMessage = "Sorry we couldn't find that";
export default function PageError(props: Props) {
  console.log(props.error);
  return (
    <View
      style={{
                backgroundColor: 'white',
                padding: 100,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}
    >
      <H2>{errorMessage}</H2>
    </View>
  );
}

