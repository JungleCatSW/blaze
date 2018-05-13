import { StackNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import InitialRouter from './InitialRouter';

export default StackNavigator({

  HomeScreen: { screen: HomeScreen },
  InitialRouter: { screen: InitialRouter },
}, {
  initialRouteName: 'InitialRouter',
  headerMode: 'none',
  navigationOptions: { gesturesEnabled: false },
});
