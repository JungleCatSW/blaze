// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';
import { Query } from 'react-apollo';
import { productList } from './mockData';
import ProductListItem from './ProductListItem';
import { navigateToProductDetailBySlug } from '../navigation/NavigationHelper';
import { paddingMedium } from '../config/Styles';
import CatalogItemsQuery from '../graphql/CatalogItemsQuery';
import { SHOP_ID } from '../config/api';

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

// TODO
const PLACEHOLDER = 'http://localhost:3000/assets/files/Media/vPS7e467zqSGHT3cH/thumbnail/pexels-photo-461646.png';// "https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview";

export default class ProductListScreen extends React.Component<Props, State> {
    state = {
      tag: this.props.navigation.getParam('tag', null),
      tagName: this.props.navigation.getParam('tagName', ''),
    };

    renderItem({
      item: {
        node: {
          product: {
            _id, title, pageTitle, primaryImage, pricing, slug,
          },
        },
      },
    }) {
      console.log(_id);
      return (<ProductListItem
        image={primaryImage ? primaryImage.URLs.thumbnail : PLACEHOLDER}
            // todo this can change to grey tile ?
        slug={slug}
        title={title}
        subTitle={pageTitle}
        price={pricing[0].displayPrice} // todo check array, and null check ?
        navigation={this.props.navigation}
      />);
    }

    // TODO implement as filterable flat list
    // https://facebook.github.io/react-native/docs/flatlist.htmls
    renderList(products) {
      console.log(products);
      return (<FlatList
        data={products}
        keyExtractor={(item) => item.node.product._id}
        numColumns={2}
        columnWrapperStyle={styles.container}
        renderItem={(item) => (
                this.renderItem(item)
            )}
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
            <Query query={CatalogItemsQuery} variables={{ shopId: [SHOP_ID] }}>
              {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :( {JSON.stringify(error)}</Text>;
                            return this.renderList(data.catalogItems.edges);
                        }
                        }
            </Query>
          </View>
        </Anatomy>
      );
    }
}

