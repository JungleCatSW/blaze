// @flow
import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Anatomy from '../ui/Anatomy';
import MenuTagsQuery from '../graphql/MenuTagsQuery';

export default class TagsTestScreen extends React.Component {
  render() {
    return (
    <Anatomy
        leftButtonIsDrawer={false}
        title="Detail"
        navigation={this.props.navigation}
    >
      <Query query={gql`{
  tags(shopId: "cmVhY3Rpb24vc2hvcDpKOEJocTN1VHRkZ3daeDNyeg==", isTopLevel: true) {
    edges {
      cursor
      node {
        _id
        name
        position
        slug
        subTags {
          edges {
            node {
              _id
              name
              position
              slug
            }
          }
        }
      }
    }
  }
}`}
      >
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
