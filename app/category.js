import PropTypes from 'prop-types';

import * as categoryStorage from './categoryStorage';

export const type = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  units: PropTypes.string,
});

export const defaultValue = {
  icon: undefined,
  units: undefined,
};

export const INDEX_REQUEST = 'category/INDEX_REQUEST';
export const INDEX_SUCCESS = 'category/INDEX_SUCCESS';
export const INDEX_FAILURE = 'category/INDEX_FAILURE';
export const CREATE_REQUEST = 'category/CREATE_REQUEST';
export const CREATE_SUCCESS = 'category/CREATE_SUCCESS';
export const CREATE_FAILURE = 'category/CREATE_FAILURE';
export const DELETE_REQUEST = 'category/DELETE_REQUEST';
export const DELETE_SUCCESS = 'category/DELETE_SUCCESS';
export const DELETE_FAILURE = 'category/DELETE_FAILURE';


const DEFAULT_STATE = {
  isFetching: false,
  categories: [],
};

export default function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case INDEX_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case INDEX_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
      };
    case INDEX_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case CREATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        isFetching: false,
      };
    case CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case DELETE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(
          ({ id }) => id !== action.payload.id
        ),
        isFetching: false,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default: return state;
  }
}

export function index() {
  return async dispatch => {
    dispatch({
      type: INDEX_REQUEST,
    });

    const categories = await categoryStorage.index();
    try {
      return dispatch({
        type: INDEX_SUCCESS,
        payload: categories,
      });
    } catch (e) {
      return dispatch({
        type: INDEX_FAILURE,
      });
    }
  };
}

export function create(category) {
  return async dispatch => {
    dispatch({
      type: CREATE_REQUEST,
    });

    const newCategory = await categoryStorage.create(category);
    try {
      return dispatch({
        type: CREATE_SUCCESS,
        payload: newCategory,
      });
    } catch (e) {
      return dispatch({
        type: CREATE_FAILURE,
      });
    }
  };
}

export function destroy(category) {
  return async dispatch => {
    dispatch({
      type: DELETE_REQUEST,
    });

    await categoryStorage.destroy(category);
    try {
      return dispatch({
        type: DELETE_SUCCESS,
        payload: category,
      });
    } catch (e) {
      return dispatch({
        type: DELETE_FAILURE,
      });
    }
  };
}
