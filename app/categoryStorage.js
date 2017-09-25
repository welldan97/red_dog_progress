import 'isomorphic-fetch';
import { URL } from '../config/server';

const url = () => `${URL}/categories`;
export async function index() {
  const response = await fetch(url());
  return response.json();
}
