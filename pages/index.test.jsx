import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../pages/index';

it('It renders', () => {
  const component = renderer.create(<Index />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
