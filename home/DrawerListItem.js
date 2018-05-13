import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { H2, Icon } from 'native-base';
import { appStyles } from '../config/AppColors';
import { paddingMedium } from '../config/Styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.cardColor,
    borderBottomColor: appStyles.separatorColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: paddingMedium,
  },
  icon: {
    paddingRight: paddingMedium,
  },
});

export default function DrawerListItem({
  label, route, icon, navigateToRoute,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { navigateToRoute(route); }}
    >
      <Icon name={icon} style={styles.icon} />
      <H2>{label}</H2>
    </TouchableOpacity>
  );
}


DrawerListItem.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  navigateToRoute: PropTypes.func.isRequired,
};

