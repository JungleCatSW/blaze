import { StackActions, NavigationActions } from 'react-navigation';
import type { Tag } from '../types/types';

export function resetNavigation(navigation : Object, routeName : string) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  navigation.dispatch(resetAction);
}

export function navigateToProductListByTag(navigation : Object, tag : string, tagName: string) {
  // Push creates a new instance, params will be read
  navigation.push('ProductListScreen', {
    tag,
    tagName,
  });
}

export function navigateToProductDetailById(navigation : Object, id : string) {
  navigation.push('ProductDetailScreen', {
    id,
  });
}

// TODO make the screen for this!
export function navigateToTagsListByTag(navigation : Object, tag: Tag) {
  navigation.push('TagsListScreen', {
    tag,
  });
}
