import React from 'react';
import PropTypes from 'prop-types';
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
    label: 'Cart',
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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToRoute = (route) => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <Anatomy
        leftButtonIsDrawer
        drawerContent={<HomeDrawer
          mainDrawerRoutes={mainDrawerRoutes}
          navigateToRoute={this.navigateToRoute}
        />}
      >
        <Text>HomeScreen</Text>
      </Anatomy>);
  }
}
