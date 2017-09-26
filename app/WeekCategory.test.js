import React from 'react';
import renderer from 'react-test-renderer';

import WeekCategory from './WeekCategory';
import categoryFactory from './categoryFactory';

it('It renders', () => {
  const attributes = {
    today: new Date('2017-08-18T03:24:00'),
    category: [categoryFactory(), categoryFactory()],
  };
  const component = renderer.create(<WeekCategory {...attributes} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
