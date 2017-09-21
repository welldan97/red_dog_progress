import React from 'react';
import { Table } from 'reactstrap';

export default () => (
  <Table bordered>
    <thead>
      <tr>
        <th />
        <th>Monday</th>
        <th>Tuesday</th>
        <th className="table-info">Wednesday</th>
        <th>Thursday</th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" > Meditation </th>
        <td>🌀</td>
        <td>🌀🌀🌀</td>
        <td className="table-info">🌀</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th scope="row" > Jogging </th>
        <td>🏃</td>
        <td>❌</td>
        <td className="table-info">🏃</td>
        <td />
        <td />
        <td />
      </tr>

      <tr>
        <th scope="row" > Work </th>
        <td>12 hours</td>
        <td>5 hours</td>
        <td className="table-info" />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </Table>
);
