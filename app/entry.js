import PropTypes from 'prop-types';

import { createResource } from 'redux-rest-resource';

import { URL } from '../config/server';

export const propType = PropTypes.shape({
  id: PropTypes.number,
  categoryId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number,
});


const { types, actions, reducers } = createResource({
  name: 'entry',
  pluralName: 'entries',
  url: `${URL}/entries`,
  actions: {
    fetch: { transformResponse(response) {
      if (!response.body) {
        return response;
      }

      return {
        ...response,
        body: [
          ...response.body.map(entry => ({
            ...entry,
            date: new Date(entry.date),
          })),
        ],
      };
    },
    },
  },
});
export { types, reducers, actions };
