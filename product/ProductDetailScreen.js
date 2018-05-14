// @flow
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import Swiper from 'react-native-swiper';
import Anatomy from '../ui/Anatomy';


type Props = {
    navigation: any,
}

type State = {
    id: string
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    swiper: {
        width: '100%',
        height: 300,
    }
});
const resizeMode = "contain"; //also cover

export default class ProductDetailScreen extends React.Component<Props, State> {
    state = {
      id: this.props.navigation.getParam('id', null),
    };

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title="Detail"
          navigation={this.props.navigation}
        >
          <View>
            <Swiper style={styles.swiper}>
              <Image style={styles.image} resizeMode={resizeMode} source={{ uri: 'https://github.com/JungleCatSW/rcrn-support/raw/master/pexels-photo-534256.jpeg' }} />
              <Image style={styles.image} resizeMode={resizeMode} source={{ uri: 'https://github.com/JungleCatSW/rcrn-support/raw/master/pexels-photo-674905.jpeg' }} />
              <Image style={styles.image} resizeMode={resizeMode} source={{ uri: 'https://github.com/JungleCatSW/rcrn-support/raw/master/pexels-photo-852860.jpeg' }} />
              <Image style={styles.image} resizeMode={resizeMode} source={{ uri: 'https://github.com/JungleCatSW/rcrn-support/raw/master/pexels-photo-885580.jpeg' }} />
            </Swiper>
          </View>

        </Anatomy>
      );
    }
}

