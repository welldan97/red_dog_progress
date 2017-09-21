import React from 'react';
import renderer from 'react-test-renderer';

import WeekCategory from './WeekCategory';
import db from '../fixtures/db.json';

it('It renders', () => {
  const attributes = {
    today: new Date('2017-08-18T03:24:00'),
    category: db.categories[0],
  };
  const component = renderer.create(<WeekCategory {...attributes} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
