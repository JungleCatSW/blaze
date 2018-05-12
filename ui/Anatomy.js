// @flow
import React from 'react';
import PropTypes from 'prop-types';
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

export default class Anatomy extends React.Component {
  constructor(props) {
    super(props);
    this.contentScroll = null;
    this.drawer = {}
  }

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
          <Text>Drawer</Text>
        }
        side={drawerSide}
      >
        <AppHeader
          navigation={navigation}
          drawerButtonAction={()=>{this.drawer._root}}
          leftButtonIsDrawer={this.props.leftButtonIsDrawer}
          showSearch={this.props.showSearch}
          showLeftButton={this.props.showLeftButton}
          title={this.props.title}
        />
        <Container>
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
  drawerSide: PropTypes.string,
  leftButtonIsDrawer: PropTypes.bool,
  showLeftButton: PropTypes.bool,
  showSearch: PropTypes.bool,
};

Anatomy.defaultProps = {
  children: null,
  title: '',
  drawerSide: 'left',
  leftButtonIsDrawer: false,
  showLeftButton: true,
  showSearch: true,
};

