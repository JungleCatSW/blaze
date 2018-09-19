// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Text, H3, Button } from 'native-base';
import { paddingMedium, paddingSmall } from '../config/Styles';
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
    marginTop: paddingSmall,
    marginRight: paddingMedium / 2,
    width: (screenWidth / 2) - (paddingMedium / 2) - paddingMedium,
  },
  variantButtonRight: {
    marginTop: paddingSmall,
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
      optionIndex: 0,
      options: [],
    };
    // TODO store selected ID or model, check if valid or needs option selected

    constructor(props) {
      super(props);
      // this.setState({options: props.variants})
    }

    onPressVariant = (variantIndex, options) => {
      this.setState({ variantIndex, options, optionIndex: 0 });
    }

    onPressOption = (optionIndex) => {
      this.setState({ optionIndex });
    }

    renderOptionItem({ index, item: { title, variantId, optionTitle } }) {
      const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
      const selected = this.state.optionIndex === index;
      return (<Button
        style={style}
        full
        bordered={!selected}
        onPress={() => this.onPressOption(index, variantId)}
      ><Text>{optionTitle}</Text>
              </Button>);
    }
  // TODO separator
    // TODO maybe these ont exist
    renderOptions() {
      return (<FlatList
        data={this.state.options}
        extraData={this.state}
        keyExtractor={(item) => (item.variantId)}
        numColumns={2}
        renderItem={(item) => {
                console.log('render optiom');
                return this.renderOptionItem(item);
            }}
      />);
    }


    // TODO isSoldOut = disbled
    // TODO Low stock different color / badge
    renderVariantItem({ index, item: { title, variantId, options } }) {
      const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
      const selected = this.state.variantIndex === index;
      return (
        <Button
          style={style}
          full
          bordered={!selected}
          onPress={() => this.onPressVariant(index, options)}
        >
          <Text>{title}</Text>
        </Button>);
    }

    renderVariants() {
      return (<FlatList
        data={this.props.variants}
        extraData={this.state}
        keyExtractor={(item) => (item.variantId)}
        numColumns={2}
        renderItem={(item) => (this.renderVariantItem(item))}
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
