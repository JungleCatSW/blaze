// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, H2,H3, Icon } from 'native-base';

import { paddingMedium, paddingSmall } from '../config/Styles';
import { getWidth } from '../helpers/ScreenDimensions';
import { navigateToProductDetailById } from '../navigation/NavigationHelper';

const imageWidth = (getWidth() / 2) - paddingMedium - (paddingMedium / 2);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touchable: {
    height: 300,
    width: imageWidth,

  },

  image: {
    height: 200,
    width: '100%',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

type Props = {
    image: string,
    id: string,
    title: string,
    subTitle: string,
    price: string,
    navigation: Object,
}

export default function ProductListItem(props: Props) {
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => { navigateToProductDetailById(props.navigation, props.id); }}
    >
      <Image style={styles.image} source={{ uri: props.image }} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View style={styles.priceContainer}>
          <H2 style={styles.text}>{props.price}</H2>
          <Icon name="md-heart-outline" />

        </View>
        <H3>{props.title}</H3>
        <Text>{props.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
