// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Text, H3, Button, Separator } from 'native-base';
import { paddingMedium, paddingSmall, topSeparator } from '../config/Styles';
import { getWidth } from '../helpers/ScreenDimensions';


type Props = {
    navigation: any,
    variants: any
}

type State = {
    // slug: string
    productId: string,
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
  topSeparator,
});
// Takes in props from query
// retains state about selected item
// can take selected item in state and add to basket

// https://docs.nativebase.io/Components.html#actionsheet-def-headref
export default class Variant extends React.Component<Props, State> {
    state = {
      productId: '',
      variantIndex: 0,
      optionIndex: 0,
      options: [],
    };
    // TODO store selected ID or model, check if valid or needs option selected

    static getDerivedStateFromProps(props, state) {
    // Are these new props ?
      // If so, check if options and set the state to the first variants options
      if (props._id !== state.productId) {
        const options = props.variants[0].options || [];
        return {
          variantIndex: 0,
          optionIndex: 0,
          productId: props._id,
          options,
        };
      }
      return null;
    }

    onPressVariant = (variantIndex, options) => {
      this.setState({ variantIndex, options, optionIndex: 0 });
    }

    onPressOption = (optionIndex) => {
      this.setState({ optionIndex });
    }

    renderOptionItem({
      index, item: {
        variantId, optionTitle, isSoldOut, pricing,
      },
    }) {
      const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
      const selected = this.state.optionIndex === index;
      return (<Button
        style={style}
        full
        disabled={isSoldOut}
        bordered={!selected}
        uppercase={false}
        onPress={() => this.onPressOption(index, variantId)}
      >
        <Text>{optionTitle} {pricing[0].displayPrice}</Text>
              </Button>);
    }
  // TODO separator
    // TODO maybe these ont exist
    renderOptions() {
      return (
      // TODO move this border separator into main styles
        this.state.options && this.state.options.length > 0 && (<View style={styles.topSeparator}>
          <FlatList
            data={this.state.options}
            extraData={this.state}
            keyExtractor={(item) => (item.variantId)}
            numColumns={2}
            renderItem={(item) => {
                console.log('render optiom');
                return this.renderOptionItem(item);
            }}
          />
                                                                </View>)
      );
    }


    // TODO isSoldOut = disbled
    // TODO Low stock different color / badge
    renderVariantItem({
      index, item: {
        title, variantId, options, isSoldOut, pricing,
      },
    }) {
      const style = !(index % 2) ? styles.variantButtonLeft : styles.variantButtonRight;
      const selected = this.state.variantIndex === index;
      return (
        <Button
          style={style}
          full
          disabled={isSoldOut}
          bordered={!selected}
          uppercase={false}
          onPress={() => this.onPressVariant(index, options)}
        >
          <Text>{title} {pricing[0].displayPrice}</Text>
        </Button>);
    }

    renderVariants() {
      console.log(this.props);
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
