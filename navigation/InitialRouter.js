// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { resetNavigation } from './NavigationHelper';
import FullScreenLoading from '../ui/FullScreenLoading';
import { NavigationActions } from 'react-navigation';

export default class InitialRouter extends React.Component {
    static navigationOptions = {
      title: 'InitialRouter',
    };

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      resetNavigation(this.props.navigation, this.getInitialRoute());
    }

    getInitialRoute = () => {
      // TODO find out if app has been opened before
      // if no show Introscreen
      return 'HomeScreen';
    };

    render() {
      return (<FullScreenLoading />);
    }
}


InitialRouter.propTypes = {
  navigation: PropTypes.object.isRequired,
};

InitialRouter.defaultProps = {

};
