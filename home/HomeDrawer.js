// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
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

type Props = {
    mainDrawerRoutes: Array<Object>,
    navigateToRoute: Function,
}

export function HomeDrawer(props: Props) {
// TODO add user model as props or connect via Apollo?
  return (
    <View style={styles.container}>
      <DrawerBanner />
      {props.mainDrawerRoutes.map((drawerRoute) => {
          return (<DrawerListItem
            key={drawerRoute.route}
            navigateToRoute={props.navigateToRoute}
            route={drawerRoute.route}
            icon={drawerRoute.icon}
            label={drawerRoute.label}
          />);
      })}
    </View>
  );
}

