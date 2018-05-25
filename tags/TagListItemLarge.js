// @flow

import React from 'react';
import { TouchableOpacity, View, Stylesheet } from 'react-native';
import { H2, Icon } from 'native-base';
import type { Tag } from '../types/types';
import { appStyles } from '../config/AppColors';
import { navigateToProductListByTag } from '../navigation/NavigationHelper';

// this is a full width list item, with an optional image
const styles = Stylesheet.create({
  container: {
    backgroundColor: appStyles.cardColor,
    width: '100%',
    flexDirection: 'row',
  },
});

type Props = {
    tag: Tag,
}

export default function TagListItemLarge(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToProductListByTag(props.tag)}>
        <H2>{props.tag.name}</H2>
        <Icon name="ios-arrow-forward" />
      </TouchableOpacity>
    </View>
  );
}

