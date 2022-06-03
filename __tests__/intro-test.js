import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/screens/intro/intro.view';

test('renderer correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();

  expect(tree).toMatchSnapshot();
});
