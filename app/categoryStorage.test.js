import {
  index,
  create,
} from './categoryStorage';

import categoryFactory from './categoryFactory';

const mockResponse = (response, { status } = {}) =>
  new Response(JSON.stringify(response), {
    status: status || 200,
    headers: {
      'Content-type': 'application/json',
    },
  });

describe('index', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse([
        categoryFactory(),
        categoryFactory(),
      ])));
  });

  it('It fetches categories', async done => {
    const categories = await index();
    expect(categories).toMatchSnapshot();
    done();
  });
});

describe('create', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(categoryFactory())));
  });

  it('It creates category', async done => {
    const categories = await create();
    expect(categories).toMatchSnapshot();
    done();
  });
});
