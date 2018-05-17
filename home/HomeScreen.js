// @flow
import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import Anatomy from '../ui/Anatomy';
import { HomeDrawer } from './HomeDrawer';
import PromoTagCard from '../Cards/PromoTagCard';
import { features1, features2, promo } from './mockData';
import FeatureTagCard from '../Cards/FeatureTagCard';
import { paddingMedium } from '../config/Styles';


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
  {
    label: 'TagsTest',
    route: 'TagsTestScreen',
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
        <View style={{ paddingBottom: paddingMedium }}>
          <PromoTagCard
            tag={promo[0].tag}
            tagName={promo[0].tagName}
            navigation={this.props.navigation}
            image={promo[0].image}
          />
          <PromoTagCard
            tag={promo[1].tag}
            tagName={promo[1].tagName}
            navigation={this.props.navigation}
            image={promo[1].image}
          />
          <FeatureTagCard features={features1} navigation={this.props.navigation} />
          <FeatureTagCard features={features2} navigation={this.props.navigation} />
          <PromoTagCard
            tag={promo[2].tag}
            tagName={promo[2].tagName}
            navigation={this.props.navigation}
            image={promo[2].image}
          />
        </View>
      </Anatomy>
    );
  }
}
