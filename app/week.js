import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';

import WeekCategory from './WeekCategory';
import * as category from './category';

export class Presentational extends Component {
  constructor(props) {
    const { onInit } = props;
    onInit();
    super();
  }

  render() {
    const { today, categories, isFetching, error } = this.props;
    const cellClassName = day =>
      (day === today.getDay() ? 'table-info' : '');
    return (
      <div>
        {isFetching && <div>Fetching...</div>}
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
            {categories.map(c =>
              <WeekCategory category={c} today={today} key={c.id} />,
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

Presentational.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  categories: PropTypes.arrayOf(category.type),
  onInit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
};

Presentational.defaultProps = {
  categories: [],
  isFetching: false,
  error: false,
};

const Container = connect(
  ({ category: { categories, isFetching, error } }) =>
    ({ categories, isFetching, error }),
  dispatch => ({
    onInit: () => setTimeout(() => dispatch(category.index()), 1000),
  }),
)(Presentational);

export default Container;
