// @flow
import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}
// was 44,20
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX(0, 20) : 0;

export function getStatusBarHeight() {
  return STATUSBAR_HEIGHT;
}

