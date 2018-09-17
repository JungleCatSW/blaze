// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Text, H3, Button } from 'native-base';
import { paddingMedium } from '../config/Styles';
import { getWidth } from '../helpers/ScreenDimensions';


type Props = {
    navigation: any,
    variants: any
}

type State = {
    // slug: string
    variantIndex: number,
    variantId: string,
    optionIndex: number,
    optionId: string,
    options: any, // TODO arry of obj
}

const screenWidth = getWidth();

const styles = StyleSheet.create({
  variantButtonLeft: {
    marginRight: paddingMedium / 2,
    width: (screenWidth / 2) - (paddingMedium / 2) - paddingMedium,
  },
  variantButtonRight: {
    marginLeft: paddingMedium / 2,
    width: (screenWidth / 2) - (paddingMedium / 2) - paddingMedium,
  },
});
// Takes in props from query
// retains state about selected item
// can take selected item in state and add to basket

// https://docs.nativebase.io/Components.html#actionsheet-def-headref
export default class Variant extends React.Component<Props, State> {
    state = {
        variantIndex: 0,
        options: []
    };

    renderOptionItem({ index, item: { title, variantId, optionTitle }}) {
        const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
        return (<Button style={style} full bordered onPress={() => this.onPressOption(index, variantId)}><Text>{optionTitle}</Text></Button>);
    }

    renderOptions() {
        return (<FlatList
            data={this.state.options}
            keyExtractor={(item) => (item.variantId)}
            numColumns={2}
            renderItem={(item) => {
                console.log("render optiom");
                return this.renderOptionItem(item);
            }}
        />)
    }

    onPressVariant = (variantIndex, options) => {
        this.setState({variantIndex, options});
    }

    onPressOption = (optionIndex) =>{
        console.log()
    }

    renderVariantItem({ index, item: { title, variantId, options } }) {
      const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
      return (<Button style={style} full bordered onPress={() => this.onPressVariant(index,options)}><Text>{title}</Text></Button>);
    }

    renderVariants() {
        console.log(this.props.variants)
      return (<FlatList
        data={this.props.variants}
        keyExtractor={(item) => (item.variantId)}
        numColumns={2}
        renderItem={(item) => {
                console.log(item);
                return this.renderVariantItem(item);
            }}
      />);
    }

    render() {
      return (
        <View>
          {this.renderVariants()}
            {this.renderOptions()}
        </View>
      );
    }
}
