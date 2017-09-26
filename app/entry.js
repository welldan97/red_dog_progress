import PropTypes from 'prop-types';

import { createResource } from 'redux-rest-resource';

import { URL } from '../config/server';

export const propType = PropTypes.shape({
  id: PropTypes.number,
  categoryId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number,
});

const { types, actions: defaultActions, reducers } = createResource({
  name: 'entry',
  pluralName: 'entries',
  url: `${URL}/entries/:id`,
});

const actions = {
  ...defaultActions,
  addValue({ entry }) {
    if (entry.id) {
      return this.updateEntry({
        ...entry,
        value: entry.value + 1,
      });
    }
    return this.createEntry({
      ...entry,
      value: 1,
    });
  },
};

export { types, reducers, actions };
