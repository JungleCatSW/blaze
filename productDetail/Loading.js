import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Title from './Title';
import { paddingMedium } from '../config/Styles';
import { getWidth, getHeight } from '../helpers/ScreenDimensions';

const height = getHeight() / 2;
const width = getWidth();

const styles = StyleSheet.create({
  page: { // TODO this is a duplicate move to styles
    padding: paddingMedium,
  },
  image: { // TODO this is a duplicate move to styless
    height,
    width,
  },
});

type Props ={
    image: string,
    title: string,
    subTitle: string
}

export default function Loading({ image, title, subTitle }: Props) {
  return (
    <View>
      <Image style={styles.image} resizeMode="cover" source={{ uri: image }} />
      <View style={styles.page}>
        <Title title={title} subTitle={subTitle} />
      </View>
    </View>
  );
}
