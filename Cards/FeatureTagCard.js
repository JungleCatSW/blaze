// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, H3 } from 'native-base';

import { appStyles } from '../config/AppColors';
import { paddingMedium, paddingSmall } from '../config/Styles';
import { getWidth } from '../helpers/ScreenDimensions';

const imageWidth = (getWidth() / 2) - paddingMedium - (paddingMedium / 2);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touchableLeft: {
    height: 250,
    width: imageWidth,
    marginTop: paddingMedium,
    marginLeft: paddingMedium,
    marginRight: paddingMedium / 2,

  },
  touchableRight: {
    height: 250,
    width: imageWidth,
    marginTop: paddingMedium,
    marginRight: paddingMedium,
    marginLeft: paddingMedium / 2,
  },
  image: {
    height: 200,
    width: '100%',
  },
  textContainer: {
    padding: paddingSmall,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

// TODO not happy on this implementation

type Props = {
   features: Array<Object>,
    navigateToTag: Function,
}

export default function FeatureTagCard(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableLeft}
        onPress={() => { props.navigateToTag(props.features[0].tag); }}
      >
        <Image style={styles.image} source={{ uri: props.features[0].image }} resizeMode="cover" />
        <View style={styles.textContainer}>
          <H3 style={styles.text}>{props.features[0].title}</H3>
          <Text>{props.features[0].subTitle}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableRight}
        onPress={() => { props.navigateToTag(props.features[0].tag); }}
      >
        <Image style={styles.image} source={{ uri: props.features[1].image }} resizeMode="cover" />
        <View style={styles.textContainer}>
          <H3 style={styles.text}>{props.features[1].title}</H3>
          <Text>{props.features[1].subTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
