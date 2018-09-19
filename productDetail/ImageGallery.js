// @flow
import React from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'native-base';
import { getWidth, getHeight } from '../helpers/ScreenDimensions';

const height = getHeight() / 2;
const width = getWidth();

const styles = StyleSheet.create({
  wrapper: {
    height,
    width,
  },
  image: {
    height,
    width,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

type Props = {
    // images...
    // selected image overide ?
}
// TODO support contain and cover for images in theme
// TODO allow overriding of images when selecting a variant/option
const i = 'https://i.pinimg.com/originals/52/9f/05/529f0511f61f363d94c76865cdb77021.jpg';
export default function ImageGallery(props: Props) {
  return (
    <Swiper style={styles.wrapper} showsButtons>
      <Image style={styles.image} resizeMode="cover" source={{ uri: i }} />
      <Image style={styles.image} resizeMode="cover" source={{ uri: i }} />
      <Image style={styles.image} resizeMode="cover" source={{ uri: i }} />
    </Swiper>
  );
}
