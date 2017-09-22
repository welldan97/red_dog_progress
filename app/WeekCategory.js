import React from 'react';
import PropTypes from 'prop-types';

import * as category from './category';

// eslint-disable-next-line no-shadow
const WeekCategory = ({ today, category }) => {
  const cellClassName = day =>
    (day === today.getDay() ? 'table-info' : '');
  return (
    <tr>
      <th scope="row" > {category.name} </th>
      <td className={cellClassName(1)}> 12 hours</td>
      <td className={cellClassName(2)}> 5 hours</td>
      <td className={cellClassName(3)} />
      <td className={cellClassName(4)} />
      <td className={cellClassName(5)} />
      <td className={cellClassName(6)} />
    </tr>
  );
};

WeekCategory.propTypes = {
  today: PropTypes.instanceOf(Date),
  category: category.type,
};

WeekCategory.defaultProps = {
  today: undefined,
  category: undefined,
};

export default WeekCategory;
