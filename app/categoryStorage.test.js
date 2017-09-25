import {
  index,
} from './categoryStorage';

import categoryFactory from './categoryFactory';

const mockResponse = (response, { status } = {}) =>
  new Response(JSON.stringify(response), {
    status: status || 200,
    headers: {
      'Content-type': 'application/json',
    },
  });

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve(mockResponse([
    categoryFactory(),
    categoryFactory(),
  ])));

describe('index', () => {
  it('It fetches categories', async done => {
    const categories = await index();
    expect(categories).toMatchSnapshot();
    done();
  });
});
