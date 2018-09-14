// @flow
import React from 'react';
import { Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Query } from 'react-apollo';
import Anatomy from '../ui/Anatomy';
import Variant from './Variant';
import CatalogItemsQuery from '../graphql/CatalogItemsQuery';
import { SHOP_ID } from '../config/api';
import { paddingMedium } from '../config/Styles';
import ProductQuery from '../graphql/ProductQuery';
import Description from "./Description";

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

type Props = {
    navigation: any,
}

type State = {
    slug: string,
    title: string
}

export default class ProductDetailScreen extends React.Component<Props, State> {
    state = {
      slug: this.props.navigation.getParam('slug', null),
      title: this.props.navigation.getParam('title', null),
    };

    renderDetail(product) {
      return (
        <View style={styles.page}>
          <Text>{product.title}</Text>
            <Description description={product.description}/>
          <Variant navigation={this.props.navigation} variants={product.variants} />
        </View>);
    }

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title={this.state.title}
          navigation={this.props.navigation}
        >
          <View>
            <Query query={ProductQuery} variables={{ slug: this.state.slug }}>
              {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :( {JSON.stringify(error)}</Text>;
                            return this.renderDetail(data.catalogItemProduct.product);
                        }
                        }
            </Query>
          </View>
        </Anatomy>
      );
    }
}

