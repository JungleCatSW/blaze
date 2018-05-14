// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';
import { productList } from './mockData';
import ProductListItem from './ProductListItem';
import { navigateToProductDetailById } from '../navigation/NavigationHelper';
import { paddingMedium } from '../config/Styles';

type Props = {
    navigation: any,
}
type State = {
    tag: string,
    tagName: string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: paddingMedium,
    marginRight: paddingMedium,
  },
  page: {
    paddingTop: paddingMedium,
    paddingBottom: paddingMedium,
  },
});

export default class ProductListScreen extends React.Component<Props, State> {
    state = {
      tag: this.props.navigation.getParam('tag', null),
      tagName: this.props.navigation.getParam('tagName', ''),
    };

  // TODO implement as filterable flat list
  // https://facebook.github.io/react-native/docs/flatlist.htmls
    renderList() {
      return (<FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.container}
        renderItem={({ item }) => (
          <ProductListItem
            image={item.image}
            id={item.id}
            title={item.title}
            subTitle={item.subTitle}
            price={item.price}
            navigation={this.props.navigation}
          />)}
      />);
    }

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title={this.state.tagName}
          navigation={this.props.navigation}
        >
          <View style={styles.page}>
            {this.renderList()}
          </View>
        </Anatomy>
      );
    }
}

