import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { H1, Icon } from 'native-base';
import { appStyles } from '../config/AppColors';
import DrawerBanner from './DrawerBanner';
import DrawerListItem from './DrawerListItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.backgroundColor,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});


export function HomeDrawer({ mainDrawerRoutes, navigateToRoute }) {
// TODO add user model as props or connect via Apollo?
  return (
    <View style={styles.container}>
      <DrawerBanner />
      {mainDrawerRoutes.map((drawerRoute) => {
          return (<DrawerListItem
            key={drawerRoute.route}
            navigateToRoute={navigateToRoute}
            route={drawerRoute.route}
            icon={drawerRoute.icon}
            label={drawerRoute.label}
          />);
      })}
    </View>
  );
}

HomeDrawer.propTypes = {
  mainDrawerRoutes: PropTypes.array.isRequired,
  navigateToRoute: PropTypes.func.isRequired,
};

