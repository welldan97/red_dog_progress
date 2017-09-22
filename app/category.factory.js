import { faker } from '../config/faker';

export default function (options) {
  return {
    id: faker.random.number(),
    name: faker.hacker.noun(),
    type: 'counter',
    icon: '@',
    ...options,
  };
}
