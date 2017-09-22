import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import WeekCategory from './WeekCategory';
import * as category from './category';

const Week = ({ today, categories }) => {
  const cellClassName = day =>
    (day === today.getDay() ? 'table-info' : '');
  return (<Table bordered>
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
      {categories.map(c =>
        <WeekCategory category={c} today={today} key={c.id} />,
      )}
    </tbody>
  </Table>
  );
};

Week.propTypes = {
  today: PropTypes.instanceOf(Date),
  categories: PropTypes.arrayOf(category.type),
};

Week.defaultProps = {
  today: undefined,
  categories: [],
};

export default Week;
