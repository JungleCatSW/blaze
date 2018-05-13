import React from 'react';
import PropTypes from 'prop-types';
import { Header, Body, Title, Right, Left, Button, Icon, View, Text, H1, Drawer } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { getStatusBarHeight } from '../helpers/StatusBarHeight';
import { appStyles } from '../config/AppColors';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: '',
    };
  }

    defaultBackButtonAction = () => {
      console.log('DEFAULT BACK');
      this.props.navigation.dispatch(NavigationActions.back({}));
    };


    renderLeftButton() {
      let leftAction = this.defaultBackButtonAction;
      let iconName = 'arrow-back';
      if (this.props.leftButtonIsDrawer) {
        leftAction = this.props.drawerButtonAction;
        iconName = 'menu';
      }
      if (this.props.showLeftButton) {
        return (
          <Button
            transparent
            style={{ alignSelf: 'center',  }}
            light
            onPress={leftAction}
          >
            <Icon name={iconName} style={{ fontSize: 32, color: appStyles.headerBarIconColor }} />
          </Button>
        );
      }
      return <View style={{ width: 60 }} />; // <View style={{width: 40}}></View>;
    }


    renderSearch() {
      return (
        <Button
          style={{ alignSelf: 'center'}}
          transparent
          onPress={() => {}}
        >
          <Icon name="search" style={{ fontSize: 32 , color: appStyles.headerBarIconColor }} />
        </Button>
      );
    }

    render() {
      return (
        <View>
          <View
            style={{
            height: getStatusBarHeight(),
            backgroundColor: appStyles.statusBarColor,
          }}
          />
          <Header
            style={{ backgroundColor: appStyles.headerBarColor }}
            androidStatusBarColor={appStyles.statusBarColor}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {this.renderLeftButton()}
              <H1
                style={{
                  color: appStyles.headerBarIconColor,
                  fontSize: 25,
                  margin: 0,
                  fontWeight: 'normal',
                }}
              >
                {this.props.title}
              </H1>
              {this.props.showSearch && this.renderSearch()}
            </View>
          </Header>

        </View>
      );
    }
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,

  navigation: PropTypes.object.isRequired,
  showLeftButton: PropTypes.bool.isRequired,

  leftButtonIsDrawer: PropTypes.bool.isRequired,
  drawerButtonAction: PropTypes.func.isRequired,
  showSearch: PropTypes.bool.isRequired,
};

AppHeader.defaultProps = {
  color: 'red',
};

