import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import noop from 'lodash/fp/noop';

import NewCategory from './NewCategory';

it('It renders', () => {
  const attributes = {
    onCreateCategory: noop,
  };
  const component = renderer.create(<NewCategory {...attributes} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('It creates new Category', () => {
  const onCreateCategory = jest.fn();
  const attributes = {
    onCreateCategory,
  };
  const component = shallow(<NewCategory {...attributes} />);
  component.simulate('click');
  component.find('input[type="text"]').simulate('change', {
    target: {
      value: 'Cookies addiction',
    },
  });
  expect(toJSON(component)).toMatchSnapshot();

  component.find('Button').simulate('click');
  expect(toJSON(component)).toMatchSnapshot();
  expect(onCreateCategory.mock.calls[0][0].name).toEqual('Cookies addiction');
});
