// @flow
import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { Query } from 'react-apollo';
import Anatomy from '../ui/Anatomy';
import { SHOP_ID } from '../config/api';
import CatalogItemsQuery from '../graphql/CatalogItemsQuery';

export default class CatalogItemsTestScreen extends React.Component {
  render() {
    return (
      <Anatomy
        leftButtonIsDrawer={false}
        title="Detail"
        navigation={this.props.navigation}
      >
        <Query query={CatalogItemsQuery} variables={{ shopId: [SHOP_ID] }}>
          {({ loading, error, data }) => {
                        if (loading) return <Text>Loading...</Text>;
                        if (error) return <Text>Error :( {JSON.stringify(error)}</Text>;
                        return data.catalogItems.edges.map(({ node }) => (
                          <Text key={node._id}>
                            {node.product._id}
                          </Text>
                        ));
          }
                            }
        </Query>
      </Anatomy>
    );
  }
}
