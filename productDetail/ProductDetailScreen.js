// @flow
import React from 'react';
import { Text, H2 } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Query } from 'react-apollo';
import Anatomy from '../ui/Anatomy';
import Variant from './Variant';
import CatalogItemsQuery from '../graphql/CatalogItemsQuery';
import { SHOP_ID } from '../config/api';
import { paddingMedium } from '../config/Styles';
import ProductQuery from '../graphql/ProductQuery';
import Description from './Description';
import Title from "./Title";
import ImageGallery from "./ImageGallery";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: paddingMedium,
    marginRight: paddingMedium,
  },
  page: {
    padding: paddingMedium,
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
        console.log(product)
      return (
        <View>
          <ImageGallery />
            <View style={styles.page}>
          <Title title={product.title} subTitle={product.pageTitle}/>
          <Variant navigation={this.props.navigation} variants={product.variants} />
          <Description description={product.description} />
            </View>
        </View>);
    }

    render() {
      return (
        <Anatomy
          leftButtonIsDrawer={false}
          title={this.state.title}
          navigation={this.props.navigation}
        >

            <Query query={ProductQuery} variables={{ slug: this.state.slug }}>
              {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :( {JSON.stringify(error)}</Text>;
                            return this.renderDetail(data.catalogItemProduct.product);
                        }
                        }
            </Query>

        </Anatomy>
      );
    }
}

