import { StackActions, NavigationActions } from 'react-navigation';

export function resetNavigation(navigation, routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  navigation.dispatch(resetAction);
}
