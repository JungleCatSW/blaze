// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { appStyles } from '../config/AppColors';
import { paddingMedium } from '../config/Styles';
import { navigateToProductListByTag } from '../navigation/NavigationHelper';

const styles = StyleSheet.create({
  container: {
    marginTop: paddingMedium,
    height: 200,
    width: '100%',
  },
  image: {
    height: 200,
    width: '100%',
  },
});


type Props = {
    image: string,
    tag: string,
    tagName: string,
    navigation: Object,
}

export default function PromoTagCard(props: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => { navigateToProductListByTag(props.navigation, props.tag, props.tagName); }}>
      <Image style={styles.image} source={{ uri: props.image }} resizeMode="cover" />
    </TouchableOpacity>
  );
}
