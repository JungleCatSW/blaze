// @flow
import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Anatomy from '../ui/Anatomy';
import MenuTagsQuery from '../graphql/MenuTagsQuery';
import { SHOP_ID } from '../config/api';

export default class TagsTestScreen extends React.Component {
  render() {
    return (
      <Anatomy
        leftButtonIsDrawer={false}
        title="Detail"
        navigation={this.props.navigation}
      >
        <Query query={MenuTagsQuery} variables={{ shopId: SHOP_ID }}>
          {({ loading, error, data }) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) return <Text>Error :( {JSON.stringify(error)}</Text>;

              return data.tags.edges.map(({ node }) => (
                <Text key={node._id}>
                  {node.name}
                </Text>
              ));
          }}
        </Query>
      </Anatomy>
    );
  }
}
