import { combineReducers } from 'redux';
import category from './category';
import { reducers as entry } from './entry';

export const reducer = combineReducers({
  category,
  entry,
});
