import 'isomorphic-fetch';
import { URL } from '../config/server';

const url = () => `${URL}/categories`;

// eslint-disable-next-line no-shadow
const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: 'post',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export async function index() {
  const response = await fetch(url());
  return response.json();
}

export async function create(category) {
  return postRequest(url(), category);
}
