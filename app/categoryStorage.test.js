import {
  index,
} from './categoryStorage';

describe('index', () => {
  it('It fetches categories', done => {
    index().then(categories => {
      expect(categories).toMatchSnapshot();
      done();
    });
  });
});
