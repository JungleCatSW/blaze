// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { appStyles } from '../config/AppColors';
import type { Tag } from '../types/types';


const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.backgroundColor,
    flex: 1,
  },
});

type Props = {
  tag: Tag,
}

export default function ProductListFilter(props: Props) {
  return (
    <View style={styles.container} />
  );
}
