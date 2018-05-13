// @flow
import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';
import { HomeDrawer } from './HomeDrawer';


const mainDrawerRoutes = [
  {
    label: 'Home',
    route: 'HomeScreen',
    icon: 'home',
  },
  {
    label: 'My Cart',
    route: 'CartScreen',
    icon: 'cart',
  },
  {
    label: 'Saved',
    route: 'SavedScreen',
    icon: 'heart',
  },
  {
    label: 'Account',
    route: 'AccountScreen',
    icon: 'contact',
  },
  {
    label: 'Settings',
    route: 'SettingsScreen',
    icon: 'settings',
  },
  {
    label: 'Help',
    route: 'HelpScreen',
    icon: 'help-circle',
  },
];

type Props = {
    navigation: any,
};

export default class HomeScreen extends React.Component<Props> {


  navigateToRoute = (route : string) => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <Anatomy
        leftButtonIsDrawer
        navigation={this.props.navigation}
        drawerContent={<HomeDrawer
          mainDrawerRoutes={mainDrawerRoutes}
          navigateToRoute={this.navigateToRoute}
        />}
      >
        <Text>HomeScreen</Text>
      </Anatomy>
    );
  }
}
