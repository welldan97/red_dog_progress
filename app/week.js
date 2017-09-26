import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import noop from 'lodash/fp/noop';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';
import moment from 'moment';
import { Table } from 'reactstrap';

import WeekCategory from './WeekCategory';
import NewCategory from './NewCategory';
import * as category from './category';
import * as entry from './entry';

// eslint-disable-next-line no-shadow
function filterEntries(entries, category, today) {
  const monday = moment(today).startOf('week').add(1, 'day');
  const weekEntries = flow(
    filter(e => e.categoryId === category.id),
    filter(e => monday.isSameOrBefore(e.date, 'day')),
  )(entries) || [];
  return Array.from({ length: 7 }, (v, i) =>
    weekEntries.find(e => new Date(e.date).getDay() === i + 1 % 7) || {
      date: monday.add(i, 'day').toString(),
      categoryId: category.id,
      presist: false,
    },
  );
}

export const Presentational = ({
  today,
  categories,
  entries,
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
            <th className={cellClassName(5)}>Thursday</th>
            <th className={cellClassName(6)}>Saturday</th>
            <th className={cellClassName(0)}>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => (
            <WeekCategory
              category={c}
              entries={filterEntries(entries, c, today)}
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
  categories: PropTypes.arrayOf(category.propType),
  entries: PropTypes.arrayOf(entry.propType),
  error: PropTypes.bool,
  onCreateCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
};

Presentational.defaultProps = {
  categories: [],
  entries: [],
  error: false,
  onCreateCategory: noop,
  onDeleteCategory: noop,
};

const Container = connect(
  ({ category: { categories, error }, entry: { items } }) =>
    ({ categories, error, entries: items }),
  dispatch => ({
    onCreateCategory: newCategory =>
      dispatch(category.create(newCategory)),
    onDeleteCategory: categoryToDelete =>
      dispatch(category.destroy(categoryToDelete)),
  }),

)(Presentational);

export default Container;
