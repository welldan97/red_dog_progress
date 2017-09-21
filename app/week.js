import React from 'react';
import { Table } from 'reactstrap';

import WeekCategory from './WeekCategory';

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
export default Week;
