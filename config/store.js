import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer } from '../app';

export default initialState => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
