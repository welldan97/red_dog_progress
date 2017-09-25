import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import noop from 'lodash/fp/noop';

import { Table } from 'reactstrap';

import WeekCategory from './WeekCategory';
import NewCategory from './NewCategory';
import * as category from './category';


export const Presentational = ({
  today,
  categories,
  isFetching,
  error,
  onCreateCategory,
  onDeleteCategory,
}) => {
  const cellClassName = day =>
    (day === today.getDay() ? 'table-info' : '');
  return (
    <div>
      {error && <div>Error!</div>}
      <Table bordered>
        <thead>
          <tr>
            <th />
            <th className={cellClassName(1)}>Monday</th>
            <th className={cellClassName(2)}>Tuesday</th>
            <th className={cellClassName(3)}>Wednesday</th>
            <th className={cellClassName(4)}>Thursday</th>
            <th className={cellClassName(5)}>Saturday</th>
            <th className={cellClassName(6)}>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => (
            <WeekCategory
              category={c}
              today={today}
              key={c.id}
              onDelete={onDeleteCategory}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8">
              <NewCategory onCreateCategory={onCreateCategory} />
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

Presentational.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  categories: PropTypes.arrayOf(category.type),
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  onCreateCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
};

Presentational.defaultProps = {
  categories: [],
  isFetching: false,
  error: false,
  onCreateCategory: noop,
  onDeleteCategory: noop,
};

const Container = connect(
  ({ category: { categories, isFetching, error } }) =>
    ({ categories, isFetching, error }),
  dispatch => ({
    onCreateCategory: newCategory =>
      dispatch(category.create(newCategory)),
    onDeleteCategory: categoryToDelete =>
      dispatch(category.destroy(categoryToDelete)),
  }),

)(Presentational);

export default Container;
