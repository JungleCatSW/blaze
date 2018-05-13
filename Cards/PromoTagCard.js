// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { appStyles } from '../config/AppColors';
import { paddingMedium } from '../config/Styles';

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
    navigateToTag: Function,
}

export default function PromoTagCard(props: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => { props.navigateToTag(props.tag); }}>
      <Image style={styles.image} source={{ uri: props.image }} resizeMode="cover" />
    </TouchableOpacity>
  );
}
