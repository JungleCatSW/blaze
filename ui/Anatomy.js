
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container,
  Content,
  Drawer,
  H1,
  Button,
  Icon,
  Text,
} from 'native-base';


import { NavigationActions } from 'react-navigation';
import AppHeader from './AppHeader';
import {appStyles} from "../config/AppColors";

const defaultDrawerContent = <View style={{ backgroundColor: 'white', flex: 1 }}><Text>Use drawerContent props to put something here</Text></View>;

export default class Anatomy extends React.Component {
  constructor(props) {
    super(props);
    this.contentScroll = null;
    this.drawer = {};
  }

  openDrawer = () => {
    this.drawer._root.open();
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  render() {
    const {
      children,
      drawerSide,
      navigation,
    } = this.props;

    // console.log(navigation);
    return (
      <Drawer
        style={{ padding: 0 }}
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={
         this.props.drawerContent
        }
        side={drawerSide}
      >
        <AppHeader
          navigation={navigation}
          drawerButtonAction={this.openDrawer}
          leftButtonIsDrawer={this.props.leftButtonIsDrawer}
          showSearch={this.props.showSearch}
          showLeftButton={this.props.showLeftButton}
          title={this.props.title}
        />
        <Container style={{backgroundColor:appStyles.backgroundColor}}>
          <Content
            ref={(c) => {
            //  this.contentScroll = c;
            //  this.props.scrollPassBack(c);
            }}
          >
            {children}
          </Content>
        </Container>
      </Drawer>
    );
  }
}

Anatomy.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  drawerSide: PropTypes.string, // which side of the screen to show the drawer (left or right)
  drawerContent: PropTypes.element, // The react element with content for the drawer
  leftButtonIsDrawer: PropTypes.bool,
  showLeftButton: PropTypes.bool,
  showSearch: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
};

Anatomy.defaultProps = {
  children: null,
  title: '',
  drawerSide: 'left',
  leftButtonIsDrawer: false,
  showLeftButton: true,
  showSearch: true,
  drawerContent: defaultDrawerContent,
};

