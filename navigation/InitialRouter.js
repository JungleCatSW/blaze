// @flow
import React from 'react';
import { resetNavigation } from './NavigationHelper';
import FullScreenLoading from '../ui/FullScreenLoading';

type Props = {
    navigation: any,
};

export default class InitialRouter extends React.Component<Props> {
    static navigationOptions = {
      title: 'InitialRouter',
    };


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

