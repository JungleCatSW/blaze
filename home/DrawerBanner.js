import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { H1, Text } from 'native-base';
import { appStyles } from '../config/AppColors';
import { bannerBackgroundImage, bannerHeight, shopName } from '../config/Brand';
import { paddingMedium } from '../config/Styles';


const styles = StyleSheet.create({
  container: {
    height: bannerHeight,
    padding: paddingMedium,
    alignContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: bannerHeight,
  },
  text: {
    color: appStyles.textInverse,
  },
});

export default function DrawerBanner() {
  return (
    <ImageBackground style={styles.imageBackground}source={bannerBackgroundImage}>
      <TouchableOpacity style={styles.container}>
        <H1 style={styles.text}>{shopName}</H1>

        <Text style={styles.text}>Sign In</Text>

      </TouchableOpacity>
    </ImageBackground>
  );
}
