// @flow
import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

export function getWidth(): number {
  return dimensions.width;
}
export function getHeight(): number {
  return dimensions.height;
}
