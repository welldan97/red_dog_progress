import React from 'react';
import { Table } from 'reactstrap';

const WeekCategory = ({ today,category }) => {
  const cellClassName = (day) =>
    day === today.getDay() ? 'table-info' : '';
  return(
    <tr>
    <th scope="row" > {category.name} </th>
    <td  className={cellClassName(1)}> 12 hours</td>
    <td className={cellClassName(2)}> 5 hours</td>
    <td  className={cellClassName(3)} />
    <td  className={cellClassName(4)} />
    <td  className={cellClassName(5)} />
    <td  className={cellClassName(6)} />
    </tr>
  );
}
export default WeekCategory;
