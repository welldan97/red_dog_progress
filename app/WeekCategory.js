import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/fp/times';
import noop from 'lodash/fp/noop';

import * as category from './category';
import * as entry from './entry';

import Cell from './Cell';

// eslint-disable-next-line no-shadow
const WeekCategory = ({ today, category, onDelete, entries }) => {
  const cellClassName = day =>
    (day === today.getDay() ? 'table-info' : '');
  return (
    <tr>
      <th scope="row" >
        {category.name}
        <a
          className="float-right text-danger"
          href="#"
          onClick={() => onDelete(category)}
        >
          ×
        </a>
      </th>
      {times(i => (
        <td className={cellClassName(i + 1 % 7)} key={i} style={{ height: 0 }}>
          <Cell category={category} entry={entries[i]} />
        </td>
      ), 7)}
    </tr>
  );
};

WeekCategory.propTypes = {
  today: PropTypes.instanceOf(Date),
  category: category.propType,
  onDelete: PropTypes.func,
  entries: PropTypes.arrayOf(entry.propType),
};

WeekCategory.defaultProps = {
  today: undefined,
  category: undefined,
  entries: [],
  onDelete: noop,
};

export default WeekCategory;
