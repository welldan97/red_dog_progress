import deepFreeze from 'deep-freeze';

import reducer, * as category from './category';
import categoryFactory from './category.factory';

describe('reducer index', () => {
  it('starts fetching categories', () => {
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

  it('fetches categories with success', () => {
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
});
