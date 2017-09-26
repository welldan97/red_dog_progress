import React from 'react';
import renderer from 'react-test-renderer';
import noop from 'lodash/fp/noop';

import categoryFactory from './categoryFactory';
import { Presentational as Week } from './Week';

it('It renders', () => {
  const attributes = {
    today: new Date('2017-08-18T03:24:00'),
    categories: [categoryFactory(), categoryFactory()],
    onInit: noop,
  };
  const component = renderer.create(<Week {...attributes} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
