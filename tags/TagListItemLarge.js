// @flow

import React from 'react';
import { TouchableOpacity, View, Stylesheet } from 'react-native';
import { H2, Icon } from 'native-base';
import type { Tag } from '../types/types';
import { appStyles } from '../config/AppColors';
import { navigateToProductListByTag } from '../navigation/NavigationHelper';

// this is a full width list item, with an optional image

type Props = {
    tag: Tag,
}
// TODO, need to bring in sub tags ?
// possibly get rid of sub tags now ? and use a tag tree in filter drawer
export function TagListItemLarge(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToProductListByTag(props.tag)}>
        <H2>{props.tag.name}</H2>
        <Icon name="ios-arrow-forward" />
      </TouchableOpacity>
    </View>
  );
}

const styles = Stylesheet.create({
  container: {
    backgroundColor: appStyles.cardColor,
    width: '100%',
    flexDirection: 'row',
  },
});
