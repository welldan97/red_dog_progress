import React from 'react';
import renderer from 'react-test-renderer';
import { mockDate } from '../helpers/testHelpers';

import Index from './index';

beforeEach(mockDate);
afterEach(mockDate.restore);

it('It renders', () => {
  const component = renderer.create(<Index />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
