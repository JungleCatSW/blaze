// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Drawer } from 'native-base';
import Anatomy from '../ui/Anatomy';
import { productList } from './mockData';
import ProductListItem from './ProductListItem';
import { navigateToProductDetailById } from '../navigation/NavigationHelper';
import { paddingMedium } from '../config/Styles';
import ProductListFilter from "./ProductListFilter";

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
      // TODO add variables from filter drawer
    };

    drawer : any;

  // TODO implement as filterable flat list
  // https://facebook.github.io/react-native/docs/flatlist.htmls
    // TODO This query needs to take its variables from state
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

    closeDrawer = () => {
      this.drawer._root.close();
    };

    openDrawer = () => {
      this.drawer._root.open();
    };

    // TODO state hereO this should be passed into filter drawer and then used to set t
    setFilterTagsCallback = () => {

    };

    // TODO the filter has to get the tag or search term of this screen

    render() {
      return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<ProductListFilter/>}
          onClose={() => { this.closeDrawer(); }}
        >
          <Anatomy
            leftButtonIsDrawer={false}
            title={this.state.tagName}
            navigation={this.props.navigation}
          >
            <View style={styles.page}>
              {this.renderList()}
            </View>
          </Anatomy>
        </Drawer>
      );
    }
}

