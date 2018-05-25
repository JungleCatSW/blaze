// @flow
import React from 'react';
import { Query } from 'react-apollo';
import { SHOP_ID } from '../config/api';
import MenuTagsQuery from '../graphql/MenuTagsQuery';
import TagListItemLarge from '../tags/TagListItemLarge';
import PageLoading from '../ui/PageLoading';
import PageError from '../ui/PageError';

export default function TopLevelTagsList() {
  return (
    <Query query={MenuTagsQuery} variables={{ shopId: SHOP_ID }}>
      {({ loading, error, data }) => {
            if (loading) return <PageLoading />;
            if (error) return <PageError error={error} />;
            return data.tags.edges.map(({ tag }) => (
              <TagListItemLarge tag={tag} />
            ));
        }}
    </Query>
  );
}
