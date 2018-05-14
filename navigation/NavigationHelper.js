import { StackActions, NavigationActions } from 'react-navigation';

export function resetNavigation(navigation : Object, routeName : string) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  navigation.dispatch(resetAction);
}

export function navigateToProductListByTag( navigation : Object, tag : string, tagName: string ){
  // Push creates a new instance, params will be read
  navigation.push('ProductListScreen', {
       tag,
       tagName,
    });
}

export function navigateToProductDetailById(){}