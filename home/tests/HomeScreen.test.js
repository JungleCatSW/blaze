import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';

test('Home Screen Snapshot', () => {
  const component = renderer.create((
    <HomeScreen navigation={{}} />
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
