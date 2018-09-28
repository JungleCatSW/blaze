import React from "react";
import {UPDATE_NETWORK_STATUS} from "../graphql/clientState";
import {graphql} from "react-apollo";
import { View } from 'react-native';
import { Text, Button } from 'native-base';

class Net2 extends React.Component {
    render(){
        // console.log(this.props.updateNetworkStatus)
        return (<View>
            <Button onPress={() => { this.props.updateNetworkStatus(false); }}><Text>False</Text></Button>
            <Button onPress={() => { this.props.updateNetworkStatus(true); }}><Text>True</Text></Button>
        </View>);
    }
}

export default React.WrappedComponent = graphql(UPDATE_NETWORK_STATUS, {
    props: ({ mutate }) => {
        return    {
            updateNetworkStatus: (isConnected) => mutate({ variables: { isConnected} }),
        }
    },
})(Net2);