import React from 'react';
import renderer from 'react-test-renderer';
import { HomeDrawer } from '../HomeDrawer';
import { mainDrawerRoutes } from './drawerRoutes';

test('Home Drawer Snapshot', () => {
  const component = renderer.create((
    <HomeDrawer
      mainDrawerRoutes={mainDrawerRoutes}
      navigateToRoute={jest.fn()}
    />));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
