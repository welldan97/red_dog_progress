import 'isomorphic-fetch';
import { URL } from '../config/server';

const url = id => {
  if (id) {
    return `${URL}/categories/${id}`;
  }
  return `${URL}/categories`;
};

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

// eslint-disable-next-line no-shadow
const deleteRequest = async url => {
  const response = await fetch(url, {
    method: 'delete',
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

export async function destroy(category) {
  return deleteRequest(url(category.id));
}
