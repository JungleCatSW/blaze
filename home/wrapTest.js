import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { GET_NETWORK_STATUS, UPDATE_NETWORK_STATUS } from '../graphql/clientState';
import { graphql } from 'react-apollo';
// import {graphql} from "graphql";

function wrapTest({ updateNetworkStatus, networkStatus }) {
  return (<View>
    <Button onClick={() => { updateNetworkStatus(!networkStatus); }}><Text>Toggle</Text></Button>
    <Text>{ networkStatus ? 'Connected' : 'Not Connected'}</Text>
  </View>);
}

class Net extends React.Component {
  render() {
    return (<View>
      <Text>{ this.props.isConnected ? 'Connected' : 'Not Connected'}{this.props.isConnected}</Text>
            </View>);
  }
}

export default React.WrappedComponent = graphql(GET_NETWORK_STATUS, {
  props: (p) => { //{ data: { networkStatus: { isConnected } } }
    // let isConnected = true;
    console.log(p)
    // console.log(p)
    return {
      // updateNetworkStatus: (ic) => mutate({ variables: { isConnected: ic } }),
      isConnected: p.data.networkStatus.isConnected,
    };
  },
})(Net);

