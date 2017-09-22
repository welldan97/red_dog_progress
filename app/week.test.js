import React from 'react';
import renderer from 'react-test-renderer';
import noop from 'lodash/fp/noop';

import { Presentational as Week } from './Week';
import db from '../fixtures/db.json';

it('It renders', () => {
  const attributes = {
    today: new Date('2017-08-18T03:24:00'),
    categories: db.categories,
    onInit: noop,
  };
  const component = renderer.create(<Week {...attributes} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
