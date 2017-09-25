import deepFreeze from 'deep-freeze';

import reducer, * as category from './category';
import categoryFactory from './categoryFactory';

describe('reducer', () => {
  describe('index', () => {
    it('request', () => {
      expect(
        reducer(deepFreeze({
          categories: [],
          isFetching: false,
        }), {
          type: category.INDEX_REQUEST,
        }),
      ).toEqual(
        {
          categories: [],
          isFetching: true,
        },
      );
    });

    it('success', () => {
      const categories = [categoryFactory(), categoryFactory()];
      expect(
        reducer(deepFreeze({
          categories: [],
          isFetching: true,
        }), {
          type: category.INDEX_SUCCESS,
          payload: categories,
        }),
      ).toEqual(
        {
          categories,
          isFetching: false,
        },
      );
    });

    it('failure', () => {
      expect(
        reducer(deepFreeze({
          categories: [],
          isFetching: true,
        }), {
          type: category.INDEX_FAILURE,
        }),
      ).toEqual(
        {
          categories: [],
          isFetching: false,
          error: true,
        },
      );
    });
  });
});

jest.mock('./categoryStorage', () => {
  // eslint-disable-next-line
  const categoryFactory = require('./categoryFactory').default;
  return {
    index() { return Promise.resolve([categoryFactory(), categoryFactory()]); },
  };
});


describe('index()', () => {
  it('fetches categories', async done => {
    const dispatch = jest.fn();
    const action = category.index();

    await action(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: category.INDEX_REQUEST,
    });

    expect(dispatch.mock.calls[1][0].type).toEqual(category.INDEX_SUCCESS);
    expect(dispatch.mock.calls[1][0].payload.length).toEqual(2);
    done();
  });
});
