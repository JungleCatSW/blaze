// @flow
import React from 'react';
import { ActivityIndicator, View } from 'react-native';


export default function PageLoading() {
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
      <ActivityIndicator
        size="large"
      />
    </View>
  );
}

