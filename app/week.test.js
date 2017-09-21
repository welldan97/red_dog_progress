import React from 'react';
import renderer from 'react-test-renderer';

import Week from './week';

it('It renders', () => {
  const component = renderer.create(<Week />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
