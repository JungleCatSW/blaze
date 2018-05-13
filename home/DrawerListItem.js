import React from 'react';
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
    alignContent: 'center',
    padding: paddingMedium,
  },
  icon: {
    paddingRight: paddingMedium,
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'center',
  },
});

type Props = {
    label: string,
    route: string,
    icon: string,
    navigateToRoute: Function,
}
export default function DrawerListItem(props : Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { props.navigateToRoute(props.route); }}
    >
      <Icon name={props.icon} style={styles.icon} />
      <H2 style={styles.label}>{props.label}</H2>
    </TouchableOpacity>
  );
}


DrawerListItem.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  navigateToRoute: PropTypes.func.isRequired,
};

