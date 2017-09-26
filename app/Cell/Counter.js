import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import times from 'lodash/fp/times';
import noop from 'lodash/fp/noop';

import Icon from './Icon';
import * as category from '../category';
import * as entry from '../entry';

const CounterPresentational = ({ category, entry, onAddValue }) => (
  <div
    role="button"
    tabIndex={0}
    style={{ height: '100%' }}
    onClick={() => onAddValue({ entry, category })}
  >
    { entry.value &&
    times(i => <Icon key={i} value={category.icon} />, entry.value) }
  </div>
);

CounterPresentational.propTypes = {
  category: category.propType.isRequired,
  entry: entry.propType,
  onAddValue: PropTypes.func,
};

CounterPresentational.defaultProps = {
  entry: undefined,
  onAddValue: noop,
};

const CounterContainer = connect(
  (state, { category, entry }) =>
    ({ category, entry }),
  dispatch => ({
    onAddValue: (...args) =>
      dispatch(entry.actions.addValue(...args)),
  }),

)(CounterPresentational);

export default CounterContainer;
